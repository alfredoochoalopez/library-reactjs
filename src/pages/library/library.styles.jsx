import styled from "styled-components";

export const BookContainer = styled.div`
  position: relative;
  border: black solid 2px;
  padding: 40px;
  margin: 60px;
  @media (max-width: 1024px) {
    padding: 40px;
    margin: 60px;
  }
  @media (max-width: 768px) {
    padding: 30px;
    margin: 30px;
  }
`;
