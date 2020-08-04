import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components';
import { View } from 'react-native';

export default function Repository({data, onRefresh}) {
  return (
    <Container>
      <Name>{data.fullName}</Name>
      <Description>{data.description}</Description>

      <Stats>
        <Stat>
          <Icon name="star" size={16} color="#333" />
          <StatCount>{data.start}</StatCount>
        </Stat>
        <Stat>
          <Icon name="code-fork" size={16} color="#333" />
          <StatCount>{data.forks}</StatCount>
        </Stat>
      </Stats>
      <Refresh onPress={onRefresh}>
        <Icon name="refresh" color="#7159c1" size={16} />
        <RefreshText>ATUALIZAR</RefreshText>
      </Refresh>
    </Container>
  )
}

const Refresh = styled.TouchableOpacity`
  margin-top: 20px;
  flex-direction: row;
`;

const RefreshText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #7159c1;
  margin-left: 5px;
`;

const Container = styled.View`
  padding: 20px;
  border-radius: 4px;
  background: #FFF;
  margin-bottom: 15px;
`;

const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const Description = styled.Text.attrs({
  numberOfLines: 2
})`
  color: #666;
  margin-top: 5px;
  line-height: 20px;
`;

const Stats = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

const Stat = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
`;

const StatCount = styled.Text`
  margin-left: 6px;
`;
