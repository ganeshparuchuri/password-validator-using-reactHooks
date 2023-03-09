// Write your code here
import {useState} from 'react'
import {
  Maincontainer,
  Passwordcontainer,
  PasswordHeading,
  Passwordparagraph,
  Inputfield,
  Warningmsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [inputPassword, setInputPassword] = useState('')

  const onchangeInput = event => {
    setInputPassword(event.target.value)
  }

  return (
    <Maincontainer>
      <Passwordcontainer>
        <PasswordHeading>Password Validator</PasswordHeading>
        <Passwordparagraph>
          Check how strong and secure is your password
        </Passwordparagraph>
        <Inputfield
          type="password"
          onChange={onchangeInput}
          value={inputPassword}
        />
        {inputPassword.length < 8 ? (
          <Warningmsg>Your password must be at least 8 characters</Warningmsg>
        ) : (
          ''
        )}
      </Passwordcontainer>
    </Maincontainer>
  )
}
export default PasswordValidator
