import React from 'react'
import { Container, Role, User, Avatar } from './style'

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return(
    <User>
      <Avatar />

        <strong>{nickname}</strong>

        {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList:  React.FC = () => {
  return(
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Pedro Germano" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Diego Fernandes" isBot />

    </Container>
  )
}

export default UserList