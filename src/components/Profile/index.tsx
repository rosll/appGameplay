import React from 'react';
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
          Hoje é dia de ousadia e alegria
        </Message>
      </Content>
    </Container>
  );
}