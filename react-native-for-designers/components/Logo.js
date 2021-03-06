import React from 'react';
import styled from 'styled-components';

const Logo = props => (
  <Container>
    <Image source={props.image} resizeMode="contain" />
    <Text>{props.text}</Text>
  </Container>
);

export default Logo;

const Container = styled.View`
  flex-direction: row;
  background: white;
  height: 60px;
  padding: 12px 16px 12px;
  border-radius: 10px;
  align-items: center;
  margin: 0 8px 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  elevation: 4;
`;

const Image = styled.Image`
  width: 36px;
  height: 36px;
`;

const Text = styled.Text`
  font-weight: 600;
  font-size: 18px;
  margin-left: 8px;
`;
