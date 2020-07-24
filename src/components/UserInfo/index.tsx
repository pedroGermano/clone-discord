import React from 'react'
import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon } from './style'

const UserInfo: React.FC = () => {
  return(
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Pedro Germano</strong>
          <span>#2689</span>
        </UserData>
      </Profile>
     

      <Icons>
          <MicIcon />
          <HeadphoneIcon />
          <SettingsIcon />
      </Icons>
    </Container>
  )
}

export default UserInfo