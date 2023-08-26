import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ButtonA from '../ButtonA';
import {useNavigate} from "react-router-dom";
import '../font.css';

const MainSlideContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CircleContainer = styled.div`
  display: flex;
  position: absolute;
  left: 218px;
  top: 516px;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0 10px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#fddd33' : '#a3a3a3')};
`;

const H1 = styled.h1`
  color: #FFF;
  text-align: center;
  font-family: Pretendard-Regular;
  font-size: 70px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: absolute;
  left: 193px;
  top: 122px;
`;

const H2 = styled.h2`
  color: #FFF;
  font-family: Pretendard-Regular;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  position: absolute;
  left: 218px;
  top: 238px;
`;

const H3 = styled.h3`
  color: #FFF;
  font-family: Pretendard-Regular;
  font-size: 35px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
  position: absolute;
  left: 218px;
  top: 237px;
  
`;

const H4 = styled.h3`
  color: #FFF;
  font-family: Pretendard-Regular;
  font-size: 35px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  position: absolute;
  left: 218px;
  top: 310px;
`;

const SlideContent = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

function MainSlide() {
  const navigate = useNavigate();

  const [selectedCircle, setSelectedCircle] = useState(1);
  const [slideInterval, setSlideInterval] = useState(null);

  const handleCircleClick = (index) => {
    setSelectedCircle(index);
    clearInterval(slideInterval);
    const newInterval = setInterval(() => {
      setSelectedCircle((prevSelected) => (prevSelected < 5 ? prevSelected + 1 : 1));
    }, 15000);
    setSlideInterval(newInterval);
  };

  useEffect(() => {
    const initialInterval = setInterval(() => {
      setSelectedCircle((prevSelected) => (prevSelected < 5 ? prevSelected + 1 : 1));
    }, 8000);
    setSlideInterval(initialInterval);

    return () => clearInterval(initialInterval);
  }, []);

  return (
    <MainSlideContainer>
      <div className="background" />
      <div className="content">
        <SlideContent isVisible={selectedCircle === 1}>
          <H1>‘문득’ 등장한 서비스</H1>
          <H2>쇼핑할 때 이미지에 대체 텍스트가 적혀 있지 않아 불편하지 않으셨나요?</H2>
          <H4>이 서비스는 광학 문자 인식(OCR), 그래프 기반 랭킹 알고리즘을 기반으로<br></br>시각 장애인의 원활한 온라인 쇼핑을 위해 개발되었습니다.</H4>
          <ButtonA onClick={()=>{navigate("/service");}}/>
        </SlideContent>
        <SlideContent isVisible={selectedCircle === 2}>
          <H1>단축키 사용법 설명</H1>
          <H3>‘문득’에서 유용하게 사용할 수 있는 단축키를 알려드립니다.<br></br>쉽고 간편하게 서비스를 이용해 보세요!</H3>
          <ButtonA onClick={()=>{navigate("/keyW");}}/>
        </SlideContent>
        <SlideContent isVisible={selectedCircle === 3}>
          <H1>텍스트 변환</H1>
          <H3>단축키를 활용해 캡처했던 이미지를 첨부해 보세요!<br></br>이미지 속 텍스트를 음성으로 들을 수 있어요.</H3>
          <ButtonA title="바로 가기" onClick={()=>{navigate("/convert");}}/>
        </SlideContent>
        <SlideContent isVisible={selectedCircle === 4}>
          <H1>텍스트 요약</H1>
          <H3>너무 길었던 텍스트, 이젠 안녕!<br></br>텍스트를 요약하여 중요한 정보만 빠르게 얻을 수 있어요.</H3>
          <ButtonA title="바로 가기" onClick={()=>{navigate("/summary");}}/>
        </SlideContent>
        <SlideContent isVisible={selectedCircle === 5}>
          <H1>피드백 보내기</H1>
          <H3>서비스를 제작한 달토끼들에게 피드백을 보내주세요!<br></br>소중한 피드백들을 반영해 더 나은 서비스로 발전할게요.</H3>
          <ButtonA title="바로 가기" onClick={()=>{navigate("/feedback");}}/>
        </SlideContent>
        <CircleContainer>
          {[
            { index: 1, content: '서비스 소개' },
            { index: 2, content: '단축키 소개' },
            { index: 3, content: '텍스트 변환' },
            { index: 4, content: '텍스트 요약' },
            { index: 5, content: '피드백 작성' }
          ].map(({ index, content }) => (
            <Circle
              key={index}
              selected={selectedCircle === index}
              onClick={() => handleCircleClick(index)}
              aria-label={`동그라미 버튼 ${index} ${content}`}>
            </Circle>
          ))}
        </CircleContainer>
      </div>
    </MainSlideContainer>
  );
}

export default MainSlide;