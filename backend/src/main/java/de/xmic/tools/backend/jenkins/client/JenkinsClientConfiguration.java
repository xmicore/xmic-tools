package de.xmic.tools.backend.jenkins.client;

import feign.auth.BasicAuthRequestInterceptor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JenkinsClientConfiguration {

    @Bean
    public BasicAuthRequestInterceptor basicAuthRequestInterceptor(
            @Value("${xmic.tools.jenkins.username}") String username,
            @Value("${xmic.tools.jenkins.api-token}") String apiToken) {
        return new BasicAuthRequestInterceptor(username, apiToken);
    }

}
