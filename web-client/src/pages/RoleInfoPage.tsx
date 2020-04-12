import React from 'react';

import CenteredCard from '../components/CenteredCard/CenteredCard';
import GradientBackground from '../components/GradientBackground/GradientBackground';
import RoleInfo from '../components/RoleInfo/RoleInfo';

const RoleInfoPage: React.FC = () => (
  <GradientBackground>
    <CenteredCard>
      <RoleInfo />
    </CenteredCard>
  </GradientBackground>
);

export default RoleInfoPage;