import React from 'react';

import { Container, Text } from './styles';

export default function Cart() {
  return (
    <Container>
      <Text>Página Carrinho</Text>
    </Container>
  );
}

Cart.navigationOptions = {
  title: 'Carrinho',
};
