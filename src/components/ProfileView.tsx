import React from 'react';
import styled from 'styled-components';
import Profile from '../@types/Profile';
import Paper from '../styled-components/Paper';

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const IconGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Icon = styled.img`
  width: 200px;
`;

const PrestigeIcon = styled(Icon)`
  margin-top: -80px;
`;

type Props = {
  profile: Profile;
};

const ProfileView: React.FC<Props> = ({ profile }) => {
  return (
    <Paper>
      <Title>
        <IconGroup>
          <Icon src={profile.levelIcon} />
          <PrestigeIcon src={profile.prestigeIcon} />
        </IconGroup>
        <h2>{profile.name}</h2>
      </Title>
      <div>Games won: {profile.competitiveStats.games.won}</div>
      <div>Games played: {profile.competitiveStats.games.played}</div>
    </Paper>
  );
};

export default ProfileView;
