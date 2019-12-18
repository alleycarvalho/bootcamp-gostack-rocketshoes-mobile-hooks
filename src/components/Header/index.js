import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Wrapper,
  Container,
  Logo,
  BasketContainer,
  ItemCount,
  LogoContainer,
} from './styles';

function Header({ navigation }) {
  return (
    <Wrapper>
      <Container>
        <LogoContainer onPress={() => navigation.navigate('Main')}>
          <Logo />
        </LogoContainer>

        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" size={24} color="#FFF" />
          <ItemCount>0</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

export default Header;
