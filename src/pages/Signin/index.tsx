import React from 'react';
import { Image } from 'react-native';
import Ilustration from '../../assets/illustration.png';
import { Container, Title, SubTitle, Content } from './styles';


export function Signin() {
  return (
    <Container>
      <Image source={Ilustration} />
      <Content>
        <Title>
          Organize {`\n`} 
          suas jogatinas  {`\n`}
          facilmente
        </Title>
        <SubTitle>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos 
        </SubTitle>
      </Content>
    </Container>
  )
}