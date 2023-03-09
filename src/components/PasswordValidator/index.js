// Write your code here
import {useState} from 'react'
import {Maincontainer, Passwordcontainer} from './styledComponents'

const PasswordValidator = () => {
  const [inputPassword, setInputPassword] = useState('')

  return (
    <Maincontainer>
      <Passwordcontainer>
        <p>Password Validator</p>
      </Passwordcontainer>
    </Maincontainer>
  )
}
export default PasswordValidator
