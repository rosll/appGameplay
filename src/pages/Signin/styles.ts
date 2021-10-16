import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Content = styled.View`
  margin-top: -38px;
`

export const Title = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.heading};
  text-align: center;
  margin-bottom: 16px;
`

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  font-size: 21px;
  text-align: center;
  margin-bottom: 64px;
  font-weight: bold;

`