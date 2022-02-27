package de.xmic.tools.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class MyController {


    @GetMapping("/greeting")
    public String greeting() {
        return "Proxy for  Server working";
    }

}
