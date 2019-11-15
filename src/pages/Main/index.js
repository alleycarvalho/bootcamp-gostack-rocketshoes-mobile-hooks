import React from 'react';

import { Container, Text } from './styles';

export default function Main() {
  return (
    <Container>
      <Text>Página Home</Text>
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Home',
};
