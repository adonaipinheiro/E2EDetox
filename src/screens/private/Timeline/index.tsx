import React, {useState, useCallback, useEffect} from 'react';

// Data
import {Posts} from '../../../mocks/posts';
import {Posts as PostsProps} from '~/types/postsTypes';

// Types
import {NavigationProps} from '~/types/navigationProps';

import {Container, TimelineShimmer, Header, Tags, News} from './styles';

const Timeline: React.FC<NavigationProps> = ({navigation}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<PostsProps | any>([]);

  const navigateToProfile = () => {
    navigation.navigate('Profile');
  };

  const loadPosts = () => {
    const postsList = Posts();

    setPosts(postsList);
  };

  const loadTimelineInfo = useCallback(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    loadTimelineInfo();
    loadPosts();
  }, [loadTimelineInfo]);

  if (loading) {
    return <TimelineShimmer />;
  }

  return (
    <Container>
      <Header timeline onPress={navigateToProfile} />
      <Tags posts={posts} />
      <News posts={posts} />
    </Container>
  );
};

export default Timeline;
