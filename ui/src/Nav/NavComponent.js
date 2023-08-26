import React, { useState } from 'react';
import "./NavComponent.css";
import moondeuk from '../Nav/img/moondeuk.png';
import {useNavigate} from "react-router-dom";

const NavComponent=()=>{
    const navigate = useNavigate();

    const[click, setClick]=useState([])

    const clickButton=(index)=>{
    if(!click.includes(index)){
        setClick([index]);
    }
    };
    return(
        <>
        <div className='nav'>
        <img className='picture' src={moondeuk} alt='문득 서비스의 로고 버튼입니다. 클릭하면 첫 화면으로 이동합니다.'
         onClick={()=>{navigate("/main");}}/>
        <button className="menu" style={{color:click.includes(0) ? '#FDDD33' :''}}
        onClick={()=>{clickButton(0); navigate("/service");}}>서비스 소개</button>
        <button className="menu" style={{color:click.includes(1) ? '#FDDD33' :''}}
        onClick={()=>{clickButton(1); navigate("/keyW");}}>단축키 소개</button> 
        <button className="menu"  style={{color:click.includes(2) ? '#FDDD33' :''}}
        onClick={()=>{clickButton(2); navigate("/convert");}}>텍스트 변환</button>
        <button className="menu" style={{color:click.includes(3) ? '#FDDD33' :''}}
        onClick={()=>{clickButton(3); navigate("/summary");}}>텍스트 요약</button>
        <button className="menu"  style={{color:click.includes(4) ? '#FDDD33' :''}}
        onClick={()=>{clickButton(4); navigate("/feedback");}}>피드백 작성</button>
        </div>
        </>
    )
}

export default NavComponent;