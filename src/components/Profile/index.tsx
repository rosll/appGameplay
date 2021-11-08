import React from 'react';
import { Avatar } from '../Avatar';
import { 
  Container,
  Content,
  User,
  Greeting,
  UserName,
  Message
} from './styles';

export function Profile(){
  return (
    <Container>
      <Avatar urlImage='https://avatars.githubusercontent.com/u/49794825?v=4' />
      <Content>
        <User>
          <Greeting>
            Aoba
          </Greeting>
          <UserName>
            Romulo
          </UserName>
        </User>
        <Message>
          sayoraná meu dignissimo
        </Message>
      </Content>
    </Container>
  );
}