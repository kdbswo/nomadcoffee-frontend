import styled from "styled-components";

const SSaparator = styled.div`
  width: 100%;
  margin: 20px 0px 30px 0px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 100%;
    height: 1px;
    background-color: rgb(219, 219, 219);
  }
  span {
    margin: 0px 12px;
    color: #8e8e8e;
    font-weight: 600;
    font-size: 12px;
  }
`;

function Separator() {
  return (
    <SSaparator>
      <div></div>
      <span>Or</span>
      <div></div>
    </SSaparator>
  );
}
export default Separator;
