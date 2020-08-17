import React, {useState} from 'react';

import {
  Container,
  Header,
  Items,
  ItemArea,
  ItemText,
  ItemSwitch,
  Separator,
} from './styles';

const Profile: React.FC = () => {
  const [allowNotification, setAllowNotification] = useState(false);
  const [allowMessages, setAllowMessages] = useState(false);

  return (
    <Container>
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
        <ItemArea>
          <ItemText>Termos de Uso</ItemText>
        </ItemArea>
        <Separator />
        <ItemArea>
          <ItemText>Políticas de Privacidade</ItemText>
        </ItemArea>
      </Items>
    </Container>
  );
};

export default Profile;
