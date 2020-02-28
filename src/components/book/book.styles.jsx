import styled from "styled-components";

export const Title = styled.div`
  color: white;
  text-align: center;
  margin-top: 10px;
`;
export const Author = styled(Title)`
  font-size: small;
  margin-top: 0;
  padding-bottom: 10px;
  border-bottom: white solid 1px;
`;
export const Sinopsis = styled(Title)`
  padding: 15px;
  text-align: justify;
`;
export const Delete = styled(Sinopsis)`
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
`;
export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.7);
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.5s ease;
`;

export const Book = styled.div`
  width: 300px !important;
  height: 450px !important;
  border: black solid 1px;
  margin: 15px 0;
  position: relative;
  background: url(${({ cover }) => cover});
  background-repeat: no-repeat;
  background-size: 300px 450px;
  &:hover ${Overlay} {
    height: 100% !important;
  }
`;
export const ButtonsAction = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;
export const Button = styled.button`
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${({ color }) => (color ? color : "white")};
    color: ${({ color }) => (color ? "white" : "black")};
  }
  text-decoration: none;
  background-color: ${({ color }) => (color ? "dark" + color : "transparent")};
  color: ${({ text }) => (text ? text : "white")};
  width: ${({ size }) => (size === "full" ? "100%" : "50%")};
  height: 40px;
  border: none;
  border-top: white solid 1px;
  &:nth-child(1) {
    border-right: white solid 1px;
  }
`;
export const Edit = styled.input`
  border: white solid 1px;
  width: 100%;
  &:focus {
    outline: none;
  }
  background-color: transparent;
  color: white;
`;
export const EditText = styled.textarea`
  border: white solid 1px;
  width: 100%;
  &:focus {
    outline: none;
  }
  background-color: transparent;
  color: white;
  height: 370px;
  resize: none;
`;
