/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';

import {Container, TagsTitle, TagsFlatList} from './styles';

import Tag from './Tag';

import {Posts} from '~/types/postsTypes';

const Tags: React.FC<Posts> = ({posts}) => {
  const [tags, setTags] = useState<Array<Object>>([]);

  const loadTags = () => {
    const aux: Array<Object> = [];

    posts.map((post) => {
      post.tags.map((tag) => {
        aux.push({tag, color: post.color});
      });
    });

    setTags(aux);
  };

  useEffect(() => {
    loadTags();
  }, []);

  return (
    <Container>
      <TagsTitle>Tags</TagsTitle>
      <TagsFlatList
        horizontal
        data={tags}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <Tag data={item} />}
      />
    </Container>
  );
};

Tags.defaultProps = {
  posts: [],
};

export default Tags;
