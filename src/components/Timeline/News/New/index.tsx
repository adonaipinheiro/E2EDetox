import React from 'react';

import {
  Container,
  HeaderArea,
  AuthorText,
  TagArea,
  Title,
  Content,
} from './styles';

import {Post} from '~/types/postsTypes';

interface Props {
  data: Post | any;
}

const New: React.FC<Props> = ({data}) => {
  return (
    <Container>
      <HeaderArea>
        <AuthorText>
          Por: {data.author} • {data.postDate}
        </AuthorText>
        <TagArea color={data.color} />
      </HeaderArea>
      <Title>{data.title}</Title>
      <Content numberOfLines={3}>{data.content}</Content>
    </Container>
  );
};

export default New;
