import styled from 'styled-components'
import { Button } from "../book/book.styles";
export const BookList = styled.div`
  justify-content: space-evenly;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 10px;
  @media (max-width: 1375px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 1050px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 680px) {
    grid-template-columns: auto;

  }
`
export const Reset = styled.div`
  font-size:xx-large;
  color:black;
  text-align:center
`
export const ButtonReset = styled(Button)`
  border: black solid 1px !important;
  color:black;
  margin: 0 45px;
  width: 30%;
  &:hover{
    background-color:black;
    color:white
  }
`