package com.moonrabbit.moondeuk;


import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;

@Component
public class NaverSummaryApi {

    @Value("${SUMMARYID}")
    private String clientID;

    @Value("${SUMMARYSECRETKEY}")
    private String clientSecret;

    @Value("${SUMMARYURL}")
    private String url;

    //텍스트 요약 메서드
    public String summarizeText(String content) {
        try {
            URL apiURL = new URL(url);
            HttpURLConnection con = (HttpURLConnection) apiURL.openConnection();
            con.setRequestMethod("POST");

            con.setRequestProperty("X-NCP-APIGW-API-KEY-ID", clientID);
            con.setRequestProperty("X-NCP-APIGW-API-KEY", clientSecret);
            con.setRequestProperty("Content-Type", "application/json");

            con.setDoOutput(true);
            OutputStreamWriter wr = new OutputStreamWriter(con.getOutputStream());

            //요청할 JSON 객체 생성
            JSONObject document = new JSONObject();
            document.put("content", content);

            JSONObject option = new JSONObject();
            option.put("language", "ko");
            option.put("model", "general");
            option.put("tone", "0");
            option.put("summaryCount", "2");

            JSONObject requestObject = new JSONObject();
            requestObject.put("document", document);
            requestObject.put("option", option);

            //JSON 요청 본문 생성
            String jsonRequest = requestObject.toJSONString();
            wr.write(jsonRequest);
            wr.flush();

            int responseCode = con.getResponseCode();
            BufferedReader br;
            if (responseCode == 200) {
                br = new BufferedReader(new InputStreamReader(con.getInputStream()));
            } else {
                br = new BufferedReader(new InputStreamReader(con.getErrorStream()));
            }

            String inputLine;
            StringBuilder response = new StringBuilder();
            while ((inputLine = br.readLine()) != null) {
                response.append(inputLine);
            }
            br.close();

            return response.toString();
        } catch (Exception e) {
            e.printStackTrace();
            return "error";
        }
    }
}


