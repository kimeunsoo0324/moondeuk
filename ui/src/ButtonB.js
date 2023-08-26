import React from "react";
import styled from "styled-components";
import './font.css';

const StyledButton = styled.button`
    width: 303px;
    height: 92px;
    flex-shrink: 0;
    border-radius: 50px;
    border: none;
    background: #FDDD33;
    cursor: pointer;
    color: #000;
    text-align: center;
    font-family: Pretendard-Regular;
    font-size: 35px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;

    &:hover {
        background: #FFB800;
    }
`;

function ButtonB(props){
    const {title, onClick} = props;

    return <StyledButton onClick={onClick}>{title || "파일 다시 선택"}</StyledButton>;
}

export default ButtonB;