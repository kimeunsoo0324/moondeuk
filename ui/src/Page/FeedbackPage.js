import React, { useState } from "react";
import NavComponent from "../Nav/NavComponent";
import ButtonB from "../ButtonB";
import styled from 'styled-components';
import CopyToClipboard from "react-copy-to-clipboard";
import '../font.css';

const H1 = styled.h1`
    color: #FFF;
    text-align: center;
    font-family: Pretendard-Regular;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 82px;
`;

const Text = `moondeukwhatswu@gmail.com`;

function FeedbackPage(){
    const [copiedText] = useState(Text);
    
    return(
        <div>
            <NavComponent/>
            <br/><br/><br/><br/><br/><br/>
            <H1>
                문득은 서비스에 관련한 피드백을 상시적으로 받습니다.
                <br/>아래 이메일 주소로 피드백을 보내주세요.
                <br/>꼼꼼히 검토하고 반영하여 더 나은 문득이 되겠습니다!
                <br/><br/>{copiedText}
            </H1>
            <ButtonContainer>
                <CopyToClipboard text={copiedText}>
                    <ButtonB title="이메일 복사하기"/>
                </CopyToClipboard>
            </ButtonContainer>
        </div>
    )
}

export default FeedbackPage;