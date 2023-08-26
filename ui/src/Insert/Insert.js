import React, { useState } from "react";
import './Insert.css';
import ButtonD from "../ButtonD";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { v4 as generateUniqueId } from 'uuid';

const Insert = ({ titleB }) => {
    const navigate = useNavigate();

    const [imgFile, setImgFile] = useState(null);

    const isValidExtension = (extension) => {
        const allowedExtensions = ["jpg", "jpeg", "png"];
        return allowedExtensions.includes(extension);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            if (isValidExtension(file.name.split('.').pop().toLowerCase())) {
                setImgFile(file);
            } else {
                console.error("지원하지 않는 이미지 형식입니다.");
            }
        }
    };
     const handleDrop = (event) => {
            event.preventDefault();
            const file = event.dataTransfer.files[0];

            if (file) {
                if (isValidExtension(file.name.split('.').pop().toLowerCase())) {
                    setImgFile(file);
                } else {
                    console.error("지원하지 않는 이미지 형식입니다.");
                }
            }
        };

        const handleDragOver = (event) => {
            event.preventDefault();
        };
    const handleTextConversion = async (event) => {
        event.preventDefault();
        if (!imgFile) {
            console.error("이미지 파일을 선택하세요.");
            return;
        }

        try {
            const requestId = generateUniqueId();
            const formData = new FormData();
            formData.append('file', imgFile);

            const message = {
                images: [
                    {
                        format: 'jpg',
                        name: 'example',
                    },
                ],
                requestId: requestId,
                timestamp: 0,
                version: 'V2',
            };
            formData.append('message', JSON.stringify(message));

            try {
                const response = await axios.post(
                    '',
                    formData,
                    {
                        headers: {
                            'X-OCR-SECRET': '',
                            'Content-Type': 'multipart/form-data',
                        },
                    }
                );

                console.log("응답:", response); // 응답 확인
                  if (response.status === 200) {
                        const convertedTextList = response.data;
                        const convertedTextListString = JSON.stringify(convertedTextList);

                        navigate("/convertResult", { state: { convertedTextList: convertedTextListString } });
                    } else {
                        console.error("API 호출 에러:", response.statusText);
                    }
            } catch (error) {
                console.error("API 호출 에러:", error);
            }
        } catch (error) {
            console.error("이미지 업로드 에러:", error);
        }
    };

    return (
        <div>
            <div className="total">
                <div className="info">이미지를 텍스트로 변환합니다.</div>
                <div className="box" onDrop={handleDrop} onDragOver={handleDragOver}>
                                   {imgFile ? (
                                       <img className="Insertimg" src={URL.createObjectURL(imgFile)} alt=" " />
                                   ) : (
                                       <>

                                           <input
                                               className="signup-profileImg-input"
                                               type="file"
                                               accept="image/*"
                                               id="profileImg"
                                               name=""
                                               onChange={handleFileChange}
                                           />
                                       </>
                                   )}
                               </div>
                <form>
                    <p className="titleB">{titleB}</p>
                    {imgFile ? (
                        <ButtonD title="변환하기" onClick={handleTextConversion} />
                    ) : (
                        <>
                            <label className="signup-profileImg-label" htmlFor="profileImg">
                                이미지 업로드
                            </label>
                            <input
                                className="signup-profileImg-input"
                                type="file"
                                accept="image/*"
                                id="profileImg"
                                name=""
                                onChange={handleFileChange}
                            />
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Insert;
