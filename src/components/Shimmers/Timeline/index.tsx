import React from 'react';

import {
  Container,
  Header,
  ImageProfile,
  TagTitle,
  TagArea,
  TagItem,
  NewsArea,
  NewsItem,
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
      <NewsArea>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </NewsArea>
    </Container>
  );
};

export default Timeline;
