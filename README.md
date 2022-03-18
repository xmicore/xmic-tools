# XMIC-Tools

XMIC-Tools is a collection of tools that support my daily work as a software 
developer.

## Getting started

First, launch the frontend part based on Vue.js of our application using vite 
server.

```shell script
mvn -f frontend
```

Second, launch the backend part based on Spring Boot of our application using 
the spring-boot maven plugin.

```shell script
mvn -f backend
```

## Developer specific configurations

Activate the spring profile for development by setting the environment 
variable.

    export SPRING_PROFILES_ACTIVE="dev"

Add the configuration file `application-dev.yml` next to the file 
`application.yml` and add your custom configuration.