import React from 'react';

import {
  Container,
  BackButton,
  Logo,
  Title,
  TagArea,
  ContentArea,
} from './styles';

const Timeline: React.FC = () => {
  return (
    <Container>
      <BackButton />
      <Logo />
      <Title />
      <TagArea />
      <ContentArea />
    </Container>
  );
};

export default Timeline;
