import React from "react";
import styled from "styled-components";
import './font.css';

const StyledButton = styled.button`
    width: 338px;
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

function ButtonC(props){
    const {title, onClick} = props;

    return <StyledButton onClick={onClick}>{title || "새로운 피드백 작성"}</StyledButton>;
}

export default ButtonC;