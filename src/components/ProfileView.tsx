import React from 'react';
import Profile from '../@types/Profile';

type Props = {
  profile: Profile;
};

const ProfileView: React.FC<Props> = ({ profile }) => {
  return (
    <div>
      {profile.competitiveStats.games.won} /{' '}
      {profile.competitiveStats.games.played}
    </div>
  );
};

export default ProfileView;
