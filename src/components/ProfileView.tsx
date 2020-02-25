import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Profile from '../@types/Profile';
import Paper from '../styled-components/Paper';
import Typography from '../styled-components/Typography';

const Title = styled.div`
  display: flex;
  flex-wrap: wrap;
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
        <Typography variant="h3">{profile.name}</Typography>
      </Title>
      <Typography>Games won: {profile.competitiveStats.games.won}</Typography>
      <Typography>
        Games played: {profile.competitiveStats.games.played}
      </Typography>
    </Paper>
  );
};

export default ProfileView;
