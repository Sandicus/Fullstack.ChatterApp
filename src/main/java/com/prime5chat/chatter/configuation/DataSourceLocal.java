package com.prime5chat.chatter.configuation;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import javax.sql.DataSource;

@Configuration
@Profile({"local"})
public class DataSourceLocal {

    /* set VM options in config: -Dspring.profiles.active=local
     * set environment variables in config for username/pwd/url
     */

    private static final String USER_NAME = System.getenv("username");
    private static final String PASSWORD = System.getenv("password");
    private static final String URL = System.getenv("dburl");

    @Bean()
    public DataSource dataSource() {

        HikariConfig hikariConfig = new HikariConfig();
        hikariConfig.setUsername(USER_NAME);
        hikariConfig.setPassword(PASSWORD);
        hikariConfig.setJdbcUrl(URL);
        hikariConfig.setDriverClassName("com.mysql.cj.jdbc.Driver");

        return new HikariDataSource(hikariConfig);
    }
}
