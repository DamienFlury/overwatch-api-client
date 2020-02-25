import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
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

const AnimatedPaper = motion.custom(Paper);

type Props = {
  profile: Profile;
};

const ProfileView: React.FC<Props> = ({ profile }) => {
  return (
    <Paper
      style={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
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
