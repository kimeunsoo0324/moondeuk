package com.moonrabbit.moondeuk.admin.controller;

import com.moonrabbit.moondeuk.common.config.MD5Generator;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import javax.servlet.http.HttpSession;
import java.io.File;

@CrossOrigin(origins = "*")
@Controller
public class FileController {

    @GetMapping("/post")
    public String post() {
        return "image";
    }

    @PostMapping("/post")
    public String write(@RequestParam("file") MultipartFile files, HttpSession session) {
        try {
            String origFilename = files.getOriginalFilename();
            String extension = origFilename.substring(origFilename.lastIndexOf(".") + 1);

            if (!isValidExtension(extension)) {
                return "redirect:/error"; // 허용되지 않는 파일 확장자인 경우 error 페이지로
            }

            String filename = new MD5Generator(origFilename).toString();
            String savePath = System.getProperty("user.dir") + "\\files";

            if (!new File(savePath).exists()) {
                try {
                    new File(savePath).mkdir();
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }

            String filePath = savePath + "\\" + filename;
            files.transferTo(new File(filePath));

            // 이미지 파일의 경로를 세션에 저장
            session.setAttribute("uploadedFilePath", filePath);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return "redirect:/viewOcrResult"; // OCR 결과 페이지로
    }

    private boolean isValidExtension(String extension) {
        String[] allowedExtensions = {"jpg", "jpeg", "png"};
        for (String ext : allowedExtensions) {
            if (ext.equalsIgnoreCase(extension)) {
                return true;
            }
        }
        return false;
    }

    @GetMapping("/error")
    public String showErrorPage() {
        return "error"; // error 페이지로
    }
}

