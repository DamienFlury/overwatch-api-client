import React, { useState } from 'react';
import TextField from '../styled-components/TextField';
import Paper from '../styled-components/Paper';
import Button from '../styled-components/Button';
import ProfileView from './ProfileView';
import Profile from '../@types/Profile';

type Status<T> =
  | {
      type: 'pending';
    }
  | {
      type: 'loading';
    }
  | {
      type: 'success';
      data: T;
    }
  | {
      type: 'error';
      message: string;
    };

const Form: React.FC = () => {
  const [battleTag, setBattleTag] = useState('');
  const [profileStatus, setProfileStatus] = useState<Status<Profile>>({
    type: 'pending'
  });

  const fetchData = async () => {
    setProfileStatus({ type: 'loading' });
    const formattedBattleTag = battleTag.replace('#', '-').trim();

    const response = await fetch(
      `https://ow-api.com/v1/stats/pc/eu/${formattedBattleTag}/profile`
    );

    const data: Profile = await response.json();

    setProfileStatus({ type: 'success', data });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <Paper>
      <form onSubmit={handleSubmit}>
        <TextField
          value={battleTag}
          onChange={e => setBattleTag(e.target.value)}
          placeholder="Battle Tag"
        />
        <Button type="submit">Search</Button>
      </form>
      {(() => {
        switch (profileStatus.type) {
          case 'success':
            return <ProfileView profile={profileStatus.data} />;
          case 'loading':
            return <p>Loading...</p>;
          default:
            return null;
        }
      })()}
    </Paper>
  );
};

export default Form;
