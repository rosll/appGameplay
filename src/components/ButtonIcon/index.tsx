import React from 'react';
import discordImg from '../../assets/discord.png' ;
import { Container, IconWrapper, Imagem, Title } from './styles';

export function ButtonIcon() {
  return(
    <Container>
      <IconWrapper>
        <Imagem 
          source={ discordImg } accessibilityLabel="botao" />
      </IconWrapper>
      <Title>
        Entrar com Discord
      </Title>
    </Container>
  )
}