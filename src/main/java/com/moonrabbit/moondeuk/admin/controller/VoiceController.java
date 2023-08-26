package com.moonrabbit.moondeuk.admin.controller;

import com.moonrabbit.moondeuk.ClovaVoiceApi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletResponse;

import java.io.OutputStream;

@CrossOrigin(origins = "*")
@Controller
public class VoiceController {

    @Autowired
    private ClovaVoiceApi clovaVoiceApi;

    // 음성 재생 요청 처리 메서드
    @GetMapping("/playVoice")
    public void playVoice(@RequestParam("text") String text, HttpServletResponse response) {
        try {
            // ClovaVoiceApi를 사용하여 텍스트를 음성 데이터로 변환
            byte[] audioData = clovaVoiceApi.generateVoice(text);

            if (audioData != null) {
                // 응답 헤더
                response.setContentType("audio/mpeg");
                response.setHeader("Content-Disposition", "attachment; filename=voice.mp3");
                // 음성 데이터를 응답 본문에 기록
                OutputStream os = response.getOutputStream();
                os.write(audioData);
                os.close();
            } else {
                // 오류 처리
            }
        } catch (Exception e) {
            // 예외 처리
        }
    }
}


