import React,{useState} from "react";
import KeyInfoComponent from "./KeyInfoComponent";
import './KeyInfoComponent.css'
import {useNavigate} from "react-router-dom";

const KeyInfosW=()=>{
    const navigate = useNavigate();

    const[click, setClick]=useState([])
    const clickButton=(index)=>{
        if(!click.includes(index)){
            setClick([index]);
        }};
    return<>
    <div className="keyTitle">단축키 사용법 설명</div>
    <button className="windowmac"style={{color:click.includes(0) ? '#FDDD33' :'#FDDD33'}}
     onClick={() => { navigate("/keyW"); clickButton(0);}}>윈도우</button>
    <button className="windowmac" onClick={()=>{navigate("/keyM");}}>맥</button>
    <div className="sum">
        <KeyInfoComponent title='캡처 단축키' contents='캡처 단축키를 사용하는 방법은
Windows 로고 키와  Shift 키와 S키를
같이 누르면 됩니다.

'/>
 <KeyInfoComponent title='복사 및 붙여넣기 단축키 ' contents='텍스트를 복사하는 방법은
Ctrl 로고 키와 c를 같이 누르면 됩니다.
텍스트를 붙여넣는 방법은
Ctrl로고키와 v를 같이 누르면 됩니다.  '/>
 <div className="Compo">
     <div className="CompoC">
     <p className="title">사진 첨부하는 방법</p>
     </div>
     <div className="CompoD">
           <p className="contents">사진을 첨부하는 방법입니다.{'\n'}
                                   첫 번째, 노트북의 문서 파일 클릭합니다.{'\n'}
                                   두 번째, 스크린 샷 파일을 클릭합니다.{'\n'}
                                   세 번째, 첨부하고 싶은 사진을 클릭합니다.</p>
     </div>
     </div>
      </div>
</>

}
export default KeyInfosW;