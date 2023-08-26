import React, { useState } from "react";
import './Insert.css';
import ButtonD from "../ButtonD";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const SummaryInsert = ({ titleB }) => {
    const navigate = useNavigate();
    const [copiedText, setCopiedText] = useState("");
    const [buttonText, setButtonText] = useState("텍스트 요약하기");

    const handleInputChange = (event) => {
        setCopiedText(event.target.value);
        setButtonText("텍스트 요약하기");
    };

    const handleTextSummary = async (event) => {
        event.preventDefault();

        if (!copiedText) {
            console.error("텍스트를 입력하세요.");
            return;
        }

        try {
            const requestData = {
                document: {
                    title: "제목 없음",
                    content: copiedText
                },
                option: {
                    language: "ko",
                    model: "general",
                    tone: 0,
                    summaryCount: 3
                }
            };

            const response = await axios.post(
                // Replace with your text summarization API endpoint
                '',
                requestData,
                {
                    headers: {
                        'X-NCP-APIGW-API-KEY-ID': '',
                        'X-NCP-APIGW-API-KEY': '',
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (response.status === 200) {
                const summarizedText = response.data.summary;
                navigate("/summaryResult", { state: { summarizedText } });
            } else {
                console.error("API 호출 에러:", response.statusText);
            }
        } catch (error) {
            console.error("API 호출 에러:", error);
        }
    };

    return (
        <>
            <div className="total">
                <div className="info">텍스트를 요약합니다.</div>
                <div className="boxx">
                    <textarea
                        className="TextInput"
                        placeholder="           박스 클릭 후, 단축키를 통해 붙여넣기가 가능합니다."
                        value={copiedText}
                        onChange={handleInputChange}
                        style={{ margin: '10px' }}
                    />
                </div>
                <form onSubmit={handleTextSummary}>
                    <ButtonD title={buttonText} type="submit" />
                </form>
            </div>
        </>
    );
};

export default SummaryInsert;

