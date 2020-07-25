import React, { useRef, useEffect } from 'react'
import ChannelMessage, { Mention } from '../ChannelMessage'
import { Container, Messages, InputWrapper, Input, InputIcon  } from './style'


const ChannelData: React.FC = () => {
   const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

   useEffect(() => {
     const div = messagesRef.current

     if(div) {
      div.scrollTop = div.scrollHeight
     }
   }, [messagesRef]);

  return(
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (

          <ChannelMessage
          key={n}
          author="Pedro Germano"
          date="23/08/2020"
          content="Hoje é meu aniversário"
          />
        ))}

        <ChannelMessage 
          author="Diego Fernandes"
          date="23/08/2020"
          content={
            <>
              <Mention>@Pedro Germano</Mention>, me carrega no LoL e CS de novo
              por favor?
            </>
          }
          hasMention
          isBot

        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversaram #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>

  )
}

export default ChannelData