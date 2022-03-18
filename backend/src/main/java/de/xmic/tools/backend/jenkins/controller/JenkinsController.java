package de.xmic.tools.backend.jenkins.controller;

import de.xmic.tools.backend.jenkins.client.JenkinsClient;
import de.xmic.tools.backend.jenkins.client.model.JobsResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/jenkins")
@RequiredArgsConstructor
@Slf4j
public class JenkinsController {

    private final JenkinsClient jobClient;

    @GetMapping("/jobs")
    public JobsResponse getJobs() {
        return jobClient.getJobs();
    }

}
