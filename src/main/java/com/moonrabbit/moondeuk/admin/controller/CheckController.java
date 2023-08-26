package com.moonrabbit.moondeuk.admin.controller;

import com.moonrabbit.moondeuk.NaverOcrApi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import java.io.IOException;
import java.util.List;


import org.springframework.beans.factory.annotation.Value;

import javax.servlet.http.HttpSession;


@CrossOrigin(origins = "*")
@Controller
public class CheckController {

    @Value("${NAVERSECRETKEY}")
    String NAVERSECRETKEY;

    @Autowired
    private NaverOcrApi naverOcrApi;

    @GetMapping("/viewOcrResult")
    public String viewOcrResult(HttpSession session, Model model) throws IOException {
        // FileController에서 업로드한 사진의 파일 경로를 가져옴
        String filePath = (String) session.getAttribute("uploadedFilePath");

        if (filePath == null) {
            return "error";
        }

        // 파일 경로로! OCR API 호출
        List<String> result = naverOcrApi.callApi("POST", filePath, NAVERSECRETKEY, "jpg");
        // 결과를 스페이스로 연결한 하나의 문자열로 만듦
        String combinedResult = String.join(" ", result);
        model.addAttribute("ocrResultList", combinedResult);
        return "ocrResult"; // OCR 결과를 보여주는 뷰로 이동
    }
}
