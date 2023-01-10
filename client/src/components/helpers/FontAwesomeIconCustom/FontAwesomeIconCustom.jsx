import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const smallStyle = ``;

const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  ${(props) => {
    return ``;
  }}
`;

const FontAwesomeIconCustom = ({ icon, customStyle, size }) => {
  return <FontAwesomeIconStyled size={size} icon={icon} />;
};

export default FontAwesomeIconCustom;

/*

    todo: size: small , medium , large

*/
