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

  @media screen and (min-width: 760px) {
    width: 70%;
  }
`
