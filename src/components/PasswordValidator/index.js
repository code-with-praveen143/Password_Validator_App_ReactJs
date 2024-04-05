// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  SubContainer,
  HeadingElement,
  ParagraphElement,
  InputElement,
  ErrorElement,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const onChangePassword = event => setPassword(event.target.value)
  const length = password.length
  const errortext =
    length < 8 ? 'Your password must be at least 8 characters' : null
  return (
    <MainContainer>
      <SubContainer>
        <HeadingElement>Password Validator</HeadingElement>
        <ParagraphElement>
          Check how strong and secure is your password
        </ParagraphElement>
        <InputElement
          type="password"
          onChange={onChangePassword}
          value={password}
        ></InputElement>
        <ErrorElement>{errortext}</ErrorElement>
      </SubContainer>
    </MainContainer>
  )
}

export default PasswordValidator
