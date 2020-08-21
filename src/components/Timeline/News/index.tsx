import React from 'react';

import {Container, NewsFlatList} from './styles';

import New from './New';

import {Posts} from '~/types/postsTypes';

const News: React.FC<Posts> = ({posts}) => {
  return (
    <Container>
      <NewsFlatList
        testID="timelineScroll"
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <New data={item} />}
      />
    </Container>
  );
};

News.defaultProps = {
  posts: [],
};

export default News;
