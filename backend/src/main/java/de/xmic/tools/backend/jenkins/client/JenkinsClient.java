package de.xmic.tools.backend.jenkins.client;

import de.xmic.tools.backend.jenkins.client.model.JobsResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name = "jenkins", url = "${xmic.tools.jenkins.url}")
public interface JenkinsClient {

    @GetMapping("/api/json?tree=jobs%5Bname%2Ccolor%5D")
    JobsResponse getJobs();

}
