import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ButtonB from "../ButtonB";
import CopyToClipboard from "react-copy-to-clipboard";
import { useLocation, useNavigate } from "react-router-dom";
import '../font.css';

const Container = styled.div`
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 736px;
  flex-direction: column;
`;

const Rectangle = styled.div`
  width: 1200px;
  height: 420px;
  text-align:left;
  flex-shrink: 0;
  border-radius: 50px;
  background: #FFF;
  justify-content: center;
  align-items: center;
  color: #000;
  font-family: Pretendard-Regular;
  font-size: 40px;
  font-weight: bold;
  line-height: normal;
  overflow: auto;
  padding: 40px;
  white-space: pre-wrap;

  &::-webkit-scrollbar {
    width: 30px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, .1);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fddd33;
    border-radius: 5px;
    height: 20%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 42px;
  gap: 69px;
`;



function Result() {
  const navigate = useNavigate();
  const location = useLocation();
  const convertedTextListString = location.state ? location.state.convertedTextList : '';
  const convertedTextList = JSON.parse(convertedTextListString);
  const inferTexts = extractInferTexts(convertedTextList);

  const [audioInstance, setAudioInstance] = useState(null);

  const playTTS = async (text) => {
    const client_id = '';
    const client_secret = '';
    const api_url = '';

    try {
      if (audioInstance && !audioInstance.paused) {
        audioInstance.pause();
      }
      const response = await fetch(api_url, {
        method: 'POST',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'X-NCP-APIGW-API-KEY-ID': client_id,
                  'X-NCP-APIGW-API-KEY': client_secret,
                },
                body: new URLSearchParams({
                  speaker: 'nara',
                  volume: '0',
                  speed: '0',
                  pitch: '0',
                  text: text,
                  format: 'mp3',
                }),

      });

      const blob = await response.blob();
      const newAudio = new Audio(URL.createObjectURL(blob));
      setAudioInstance(newAudio);
      newAudio.play();
    } catch (error) {
      console.error('음성합성 API 호출 에러:', error);
    }
  };
useEffect(() => {
    return () => {
      if (audioInstance && !audioInstance.paused) {
        audioInstance.pause();
      }
    };
  }, [audioInstance]);

  return (
    <Container>
      <Rectangle>
        {inferTexts.map((sentence, index) => (
           <React.Fragment key={index}>
             {sentence}{sentence.endsWith('.') ? '\n' : ' '}
           </React.Fragment>
         ))}
      </Rectangle>
      <ButtonContainer>
        <ButtonB title="파일 다시 선택" onClick={() => navigate("/convert")} />
        <ButtonB title="음성으로 듣기" onClick={() => playTTS(inferTexts.join(' '))} />
        <CopyToClipboard text={inferTexts.join(' ')}>
          <ButtonB title="텍스트 복사하기" />
        </CopyToClipboard>
      </ButtonContainer>
    </Container>
  );
}

function extractInferTexts(convertedTextList) {
  const inferTexts = [];

  if (convertedTextList && convertedTextList.images && Array.isArray(convertedTextList.images)) {
    convertedTextList.images.forEach(image => {
      if (image.fields && Array.isArray(image.fields)) {
        image.fields.forEach(field => {
          if (field.inferText) {
            inferTexts.push(field.inferText);
          }
        });
      }
    });
  }

  return inferTexts;
}

export default Result;
