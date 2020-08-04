import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components';
import LinearGradient from "react-native-linear-gradient";
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { StatusBar, Keyboard } from 'react-native';
import Repository from "./src/components/Repository";
import api from "./src/services/api";
import getRealm from "./src/services/realm";

export default function App() {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function loadRepositories() {
      const realm = await getRealm();

      const data = realm.objects('User').sorted('start', true);
      setRepositories(data);
    }

    loadRepositories();
  }, []);

  async function saveRepository(repository) {
    const data = {
      id: repository.data.id,
      name: repository.data.first_name,
      fullName: `${repository.data.first_name} ${repository.data.first_name}`,
      description: repository.ad.text,
      start: repository.data.id,
      forks: repository.data.id,
    };

    const realm = await getRealm();
    realm.write(() => {
      // console.log("Realm is located at: " + realm.path);
      realm.create('User', data, 'modified');
    });

    return data;
  }

  async function handleAddRepository() {
    try {
      const response = await api.get(`/users/${input}`);
      const { data } = response;
      await saveRepository(data);
      setInput('');
      setError(false);
      Keyboard.dismiss();
    } catch (err) {
      console.log(err);
      setError(true);
    }
  }

  async function handleRefreshRepository(repositoryId) {
    try {
      const response = await api.get(`/users/${repositoryId}`);
      const { data } = response;
      const updated = await saveRepository(data);

      setRepositories(repositories.map(repo => (repo.id === updated.id ? updated : repo)));
      setError(false);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  }

  return (
    <Container>
      <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
      <Title>Repositórios</Title>

      <Form>
        <Input
          value={input}
          error={error}
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
        data={repositories}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (<Repository data={item} onRefresh={() => handleRefreshRepository(item.id)} />)}
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
