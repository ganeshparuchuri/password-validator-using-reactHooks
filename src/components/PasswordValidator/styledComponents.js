// Style your elements here
import styled from 'styled-components'

export const Maincontainer = styled.div`
  background-color: #24263c;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Passwordcontainer = styled.div`
  background-color: #383a4e;
  width: 90%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media screen and (min-width: 760px) {
    width: 40%;
  }
`
export const PasswordHeading = styled.h1`
  color: #edeeff;
  font-family: 'Roboto';
  font-size: 23px;
`
export const Passwordparagraph = styled.p`
  color: #edeeff;
`
export const Inputfield = styled.input`
  background-color: #edeeff;
  width: 80%;
  padding: 15px;
  border: none;
  outline: none;
`
export const Warningmsg = styled.p`
  color: #ef4444;
  text-align: center;
`
