import React from "react";
import NavComponent from "../Nav/NavComponent";
import styled from 'styled-components';
import '../font.css';

const H1 = styled.h1`
    color: #FFF;
    text-align: center;
    font-family: Pretendard-Regular;
    font-size: 45px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const H2 = styled.h2`
    color: #FFF;
    text-align: center;
    font-family: Pretendard-Regular;
    font-size: 35px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

const H3 = styled.h3`
    color: #FFF;
    text-align: center;
    font-family: Pretendard-Regular;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

const H4 = styled.h4`
    color: #FFF;
    text-align: center;
    font-family: Pretendard-Regular;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

const H5 = styled.h5`
    color: #FFF;
    text-align: center;
    font-family: Pretendard-Regular;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const Highlight = styled.span`
    color: #FDDD33;
`;

const Title = styled.span`
    color: #FDDD33;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

function ServicePage(){
    return(
        <div>
        <NavComponent />
        <br/><br/><br/><br/><br/><br/>
        <H1>
            <Highlight>온라인 쇼핑</Highlight>할 때 <Highlight>이미지 대체 텍스트</Highlight>가 적혀 있지 않아 불편하지 않으셨나요?
        </H1>
        <H2>
            '문득'은 <Highlight>시각 장애인이 겪는 온라인 쇼핑몰 이미지 인식 문제의 개선</Highlight>을 위해 개발되었으며
            <br/>웹 콘텐츠에 더 쉽게 접근하고, 필요한 정보를 효율적으로 얻을 수 있도록 지원하는 서비스입니다.
            <br/><br/>시각 장애인이 더 많은 정보에 접할 기회를 제공함으로써
            <br/><Highlight>디지털 세상에서의 평등한 접근을 촉진</Highlight>하기 위해 기획되었습니다.
        </H2>
        <br/><br/><br/><br/><br/><br/>
        <H5>
            [서비스의 기능 구성은 아래와 같습니다.]
        </H5>
        <H3>
            <Title>단축키 소개</Title>
            <br/>서비스 이용을 위해 필요한 단축키를 소개합니다.
            <br/>이를 습득하고 사용해보며 타인의 도움 없이 독립적으로 웹 사이트를 이용해 보실 수 있습니다.
            <br/><br/><br/><Title>텍스트 변환</Title>
            <br/>캡처된 이미지 내에 포함된 텍스트를 광학 문자 인식(OCR) 기술을 사용하여 추출합니다.
            <br/>추출한 텍스트를 음성으로 들을 수 있습니다.
            <br/><br/><br/><Title>텍스트 요약</Title>
            <br/>긴 텍스트를 요약하여 핵심 정보를 빠르게 파악할 수 있습니다.
            <br/>요약한 텍스트를 음성으로 들을 수 있습니다.
            <br/><br/><br/><Title>피드백 작성</Title>
            <br/>'문득'을 제작한 달토끼들에게 피드백을 보내주세요!
            <br/>서비스 개선을 위한 소중한 의견들을 기다리고 있습니다.
        </H3>
        <br/><br/><br/><br/><br/>
        <H4>
            [만든 사람들]
            <br/>멋쟁이사자처럼 11기 서울여자대학교 달토끼🌙🐇
            <br/>프론트엔드: 길연진, 김은수 | 백엔드: 김성주, 신윤솔, 최가현
        </H4>
        </div>
    );
}

export default ServicePage;