import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  border: 0.5px solid
    ${(props) => (props.hasError ? "tomato" : props.theme.borderColor)};
  border-radius: 3px;
  padding: 10px 5px;
  background-color: #fafafa;
  margin-top: 7px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 12px;
  }
  &:focus {
    border-color: rgb(38, 38, 38);
  }
`;

export default Input;
