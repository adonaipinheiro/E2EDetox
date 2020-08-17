import React from 'react';

import {
  Container,
  Header,
  ImageProfile,
  TagTitle,
  TagArea,
  TagItem,
} from './styles';

const Timeline: React.FC = () => {
  return (
    <Container>
      <Header />
      <ImageProfile />
      <TagTitle />
      <TagArea>
        <TagItem />
        <TagItem />
        <TagItem />
        <TagItem />
      </TagArea>
    </Container>
  );
};

export default Timeline;
