import React from 'react';

import { Container, Role, UserRow } from './styles';

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível 1</Role>
      <UserRow nickname="Guilherme Rods" />

      <Role>Offiline - 10</Role>
      <UserRow nickname="Diego Fernandes" />
    </Container>
  );
};

export default UserList;
