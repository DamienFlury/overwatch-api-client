import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Pie } from 'react-chartjs-2';
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
  align-items: center;
`;

const Icon = styled.img`
  width: 200px;
`;

const RatingIcon = styled(Icon)`
  width: 50px;
  margin-top: -80px;
`;

const PrestigeIcon = styled(Icon)`
  margin-top: -65px;
`;

const Chart = styled.div`
  width: 200px;
`;

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
          <RatingIcon src={profile.ratingIcon} />
          <PrestigeIcon src={profile.prestigeIcon} />
        </IconGroup>
        <Typography variant="h3">{profile.name}</Typography>
      </Title>
      <Typography variant="h3">Competetive</Typography>
      <Typography>
        Games played: {profile.competitiveStats.games.played}
      </Typography>
      <Chart>
        <Pie
          width={100}
          data={{
            labels: ['Won', 'Lost'],
            datasets: [
              {
                data: [
                  profile.competitiveStats.games.won,
                  profile.competitiveStats.games.played -
                    profile.competitiveStats.games.won
                ],
                backgroundColor: ['#00ad3f', '#ad000e'],
                hoverBackgroundColor: ['#00ad3f', '#ad000e']
              }
            ]
          }}
        />
      </Chart>
    </Paper>
  );
};

export default ProfileView;
