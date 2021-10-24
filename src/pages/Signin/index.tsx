import React from 'react';
import { 
  Image,
  StatusBar
} from 'react-native';
import Ilustration from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { 
  Container, 
  Title, 
  SubTitle, 
  Content
} from './styles';


export function Signin() {
  return (
    <Container>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent={true}
      />
      <Image source={Ilustration} />
      <Content>
        <Title>
          Conecte-se {`\n`} 
          e organize suas  {`\n`}
          jogatinas
        </Title>
        <SubTitle>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos 
        </SubTitle>
        <ButtonIcon 
          title='Entrar com Discord'
          activeOpacity={0.7}
        />
      </Content>
    </Container>
  )
}