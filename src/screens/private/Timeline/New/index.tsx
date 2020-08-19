import React, {useEffect, useCallback, useState} from 'react';
import {useRoute, useNavigation, RouteProp} from '@react-navigation/native';

import {
  Container,
  New as NewShimmer,
  Logo,
  Title,
  TagArea,
  TagName,
  BackButton,
  BackButtonIcon,
  ContentArea,
  ContentText,
} from './styles';

// Types
import {Post} from '~/types/postsTypes';

type ParamList = {
  New: {
    data: Post;
  };
};

const New: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [newData, setNewData] = useState<Post>({
    id: 0,
    author: 'Carregando',
    postDate: 'Carregando',
    tags: ['Carregando'],
    title: 'Carregando',
    content: 'Carregando',
    color: 'dddddd',
  });
  const route = useRoute<RouteProp<ParamList, 'New'>>();
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const checkIfHasNew = useCallback(() => {
    if (!route.params?.data) {
      navigation.navigate('Timeline');
    } else {
      setNewData(route.params?.data);
      setLoading(false);
    }
  }, [navigation, route.params]);

  useEffect(() => {
    checkIfHasNew();
  }, [checkIfHasNew]);

  if (loading) {
    return <NewShimmer />;
  }

  return (
    <Container>
      <BackButton onPress={goBack}>
        <BackButtonIcon />
      </BackButton>
      <Logo />
      <Title>{newData.title}</Title>
      <TagArea color={newData.color}>
        <TagName>{newData.tags[0]}</TagName>
      </TagArea>
      <ContentArea>
        <ContentText>{newData.content}</ContentText>
      </ContentArea>
    </Container>
  );
};

export default New;
