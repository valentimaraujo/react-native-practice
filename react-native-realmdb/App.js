import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components';
import { LinearGradient } from "expo-linear-gradient";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { StatusBar } from 'react-native';
import Repository from "./components/Repository";
import api from "./services/api";
import getRealm from "./services/realm";

export default function App() {
  const [input, setInput] = useState('');

  async function saveRepository(repository) {
    const data = {
      id: repository.id,
      name: repository.id,
      fullName: repository.id,
      description: repository.id,
      state: repository.id,
      forks: repository.id,
    };


  }

  async function handleAddRepository() {
    try {
      const response = await api.get(`/users/${input}`);
    } catch (err) {

    }
  }

  return (
    <Container>
      <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
      <Title>Repositórios</Title>

      <Form>
        <Input
          value={input}
          onChangeText={setInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar repositório..."
        />
        <Submit onPress={handleAddRepository}>
          <Icon name="add" size={22} color="#FFF" />
        </Submit>
      </Form>

      <List
        keyboardShouldPersistTaps="handled"
        data={[
          {
            "data": {
              "id": 10,
              "email": "byron.fields@reqres.in",
              "first_name": "Byron",
              "last_name": "Fields",
              "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
            },
            "ad": {
              "company": "StatusCode Weekly",
              "url": "http://statuscode.org/",
              "text": "A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things."
            }
          }
        ]}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (<Repository data={item} />)}
      />
    </Container>
  );
}

const Container = styled(LinearGradient).attrs({
  colors: ['#7159c1', '#9B49c1'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 }
})`
  flex: 1;
  padding-top: ${30 + getStatusBarHeight(true)}px;
`;

const Title = styled.Text`
  font-size: 32px;
  color: #FFF;
  font-weight: bold;
  padding: 0 20px;
`;

const Form = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding: 0 20px;
`;

const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999'
})`
  flex: 1;
  padding: 12px 15px;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  background: #FFF;
`;

const Submit = styled.TouchableOpacity`
  background: #6bd4c1;
  margin-left: 10px;
  justify-content: center;
  border-radius: 4px;
  padding: 0 16px;
`;

const List = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 20 },
  showsVerticalScrollIndicator: false
})`
  margin-top: 20px;
`;
