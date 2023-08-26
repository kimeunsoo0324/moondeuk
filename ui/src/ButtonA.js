import React from "react";
import styled from "styled-components";
import './font.css';

const StyledButton = styled.button`
    width: 245px;
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

    position: absolute;
    top: 490px;
    left: 1419px;

    &:hover {
        background: #FFB800;
    }
`;

function ButtonA(props){
    const {title, onClick} = props;

    return <StyledButton onClick={onClick}>{title || "자세히 보기"}</StyledButton>;
}

export default ButtonA;