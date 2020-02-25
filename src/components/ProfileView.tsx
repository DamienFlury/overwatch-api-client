import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Pie } from 'react-chartjs-2';
import Profile from '../@types/Profile';
import Paper from '../styled-components/Paper';
import Typography from '../styled-components/Typography';
import capitalizeFirstLetter from '../utils/string-functions';

const Title = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 20px;
`;

const CompetitiveQuickPlayWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -40px;
`;

const CompetitiveQuickPlayColumn = styled.div`
  margin: 0 40px;
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

type GamemodeStatsProps = {
  won: number;
  played: number;
};

const GamemodeStats: React.FC<GamemodeStatsProps> = ({ won, played }) => {
  const lost = played - won;

  return (
    <>
      <Typography>Games played: {played}</Typography>
      <Chart>
        <Pie
          width={100}
          data={{
            labels: ['Won', 'Lost'],
            datasets: [
              {
                data: [won, lost],
                backgroundColor: ['#00ad3f', '#ad000e'],
                hoverBackgroundColor: ['#00ad3f', '#ad000e']
              }
            ]
          }}
        />
      </Chart>
    </>
  );
};

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
      <CompetitiveQuickPlayWrapper>
        <CompetitiveQuickPlayColumn>
          <Typography variant="h3">Competitive</Typography>
          <GamemodeStats
            won={profile.competitiveStats.games.won}
            played={profile.competitiveStats.games.played}
          />
        </CompetitiveQuickPlayColumn>
        <CompetitiveQuickPlayColumn>
          <Typography variant="h3">Quick Play</Typography>
          <GamemodeStats
            won={profile.quickPlayStats.games.won}
            played={profile.quickPlayStats.games.played}
          />
        </CompetitiveQuickPlayColumn>
      </CompetitiveQuickPlayWrapper>
      <Typography variant="h3">Roles</Typography>
      <div>
        {profile.ratings?.map(rating => (
          <div>
            <Typography variant="h4">
              {capitalizeFirstLetter(rating.role)}
            </Typography>
            <Typography>{rating.level}</Typography>
          </div>
        ))}
      </div>
    </Paper>
  );
};

export default ProfileView;
