package com.moonrabbit.moondeuk.admin.controller;

import com.moonrabbit.moondeuk.NaverSummaryApi;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.beans.factory.annotation.Autowired;

@CrossOrigin(origins = "*")

@Controller
public class SummaryController {

    @Autowired
    private NaverSummaryApi naverSummaryApi;

    //텍스트 입력 페이지
    @GetMapping("/summary")
    public String summaryInput() {
        return "summary_input";
    }

    //요약 결과 페이지
    @PostMapping("/summary_result")
    public String summarizeText(@RequestParam("text") String content, Model model) {
        try {
            //텍스트 요약 결과 가져옴
            String summaryResult = naverSummaryApi.summarizeText(content);

            // JSON 파싱 후 "summary" 키의 값만 추출
            String summary = extractSummaryFromJson(summaryResult);

            // 모델에 요약 결과 추가하여 summary_result 페이지로 이동
            model.addAttribute("summaryResult", summary);

            return "summary_result";
        } catch (Exception e) {
            e.printStackTrace();
            return "error";
        }
    }

    // JSON에서 "summary" 키의 값을 추출하는 메서드
    private String extractSummaryFromJson(String json) {
        try {
            JSONObject jsonObject = (JSONObject) JSONValue.parse(json);
            return (String) jsonObject.get("summary");
        } catch (Exception e) {
            e.printStackTrace();
            return "Error occurred while extracting summary";
        }
    }
}
