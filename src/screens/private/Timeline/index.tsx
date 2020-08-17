import React, {useState, useCallback, useEffect} from 'react';

// Types
import {NavigationProps} from '~/types/navigationProps';

import {Container, TimelineShimmer, Header} from './styles';

const Timeline: React.FC<NavigationProps> = ({navigation}) => {
  const [loading, setLoading] = useState<boolean>(true);

  const navigateToProfile = () => {
    navigation.navigate('Profile');
  };

  const loadTimelineInfo = useCallback(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    loadTimelineInfo();
  }, [loadTimelineInfo]);

  if (loading) {
    return <TimelineShimmer />;
  }

  return (
    <Container>
      <Header timeline onPress={navigateToProfile} />
    </Container>
  );
};

export default Timeline;
