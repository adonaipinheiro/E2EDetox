import React, {useState} from 'react';
import {Alert} from 'react-native';

import {
  Container,
  Header,
  Items,
  ItemArea,
  ItemText,
  ItemSwitch,
  ItemIcon,
  Separator,
} from './styles';

const Profile: React.FC = () => {
  const [allowNotification, setAllowNotification] = useState(false);
  const [allowMessages, setAllowMessages] = useState(false);
  const [terms, setTerms] = useState('x');
  const [privacy, setPrivacy] = useState('x');

  const handlePress = (text: string, type: string) => {
    Alert.alert(
      'Atenção',
      `Você aceita ${text}`,
      [
        {
          text: 'Não',
          onPress: () => {
            if (type === 'terms') {
              setTerms('x');
            } else {
              setPrivacy('x');
            }
          },
          style: 'destructive',
        },
        {
          text: 'Aceito',
          onPress: () => {
            if (type === 'terms') {
              setTerms('check');
            } else {
              setPrivacy('check');
            }
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <Container testID="profile">
      <Header />
      <Items>
        <ItemArea>
          <ItemText>Notificações</ItemText>
          <ItemSwitch
            value={allowNotification}
            onValueChange={(value) => setAllowNotification(value)}
          />
        </ItemArea>
        <Separator />
        <ItemArea>
          <ItemText>Mensagens</ItemText>
          <ItemSwitch
            value={allowMessages}
            onValueChange={(value) => setAllowMessages(value)}
          />
        </ItemArea>
        <Separator />
        <ItemArea
          onPress={() => {
            handlePress('os Termos de Uso?', 'terms');
          }}>
          <ItemText>Termos de Uso</ItemText>
          <ItemIcon name={terms} />
        </ItemArea>
        <Separator />
        <ItemArea
          onPress={() => {
            handlePress('as Políticas de Privacidade?', 'privacy');
          }}>
          <ItemText>Políticas de Privacidade</ItemText>
          <ItemIcon name={privacy} />
        </ItemArea>
      </Items>
    </Container>
  );
};

export default Profile;
