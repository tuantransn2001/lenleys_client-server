import styled from "styled-components";
export const Wrapper = styled.div`
  width: 428px;
  height: 752px;
  background-color: ${(props) =>
    props.background ? props.background : "#FFF"};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;
