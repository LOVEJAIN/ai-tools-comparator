package com.scrollvote.api.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @PostMapping
    public void createUser(@RequestBody Map<String, Object> body) {
        jdbcTemplate.update(
            "INSERT INTO users (google_id, email, name, last_login) VALUES (?, ?, ?, CURRENT_TIMESTAMP) " +
            "ON CONFLICT (email) DO UPDATE SET last_login = EXCLUDED.last_login, name = EXCLUDED.name",
            body.get("googleId"),
            body.get("email"),
            body.get("name")
        );
    }

    @GetMapping
    public List<Map<String, Object>> getAllUsers() {
        return jdbcTemplate.queryForList("SELECT * FROM users");
    }
} 