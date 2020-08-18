import React from 'react';

import {Container, NewsFlatList} from './styles';

import New from './New';

import {Posts} from '~/types/postsTypes';

const News: React.FC<Posts> = ({posts}) => {
  return (
    <Container>
      <NewsFlatList
        data={posts}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({item}) => <New data={item} />}
      />
    </Container>
  );
};

News.defaultProps = {
  posts: [],
};

export default News;
