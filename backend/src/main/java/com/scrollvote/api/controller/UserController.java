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

    @GetMapping("/{email}")
    public Map<String, Object> getUserByEmail(@PathVariable String email) {
        List<Map<String, Object>> users = jdbcTemplate.queryForList(
            "SELECT * FROM users WHERE email = ?", 
            email
        );
        return users.isEmpty() ? null : users.get(0);
    }

    @PutMapping("/{email}/verify")
    public void verifyUser(@PathVariable String email, @RequestBody Map<String, Object> body) {
        Boolean isVerified = (Boolean) body.get("isVerified");
        jdbcTemplate.update(
            "UPDATE users SET is_verified = ? WHERE email = ?",
            isVerified,
            email
        );
    }

    @PutMapping("/{email}/admin")
    public void setAdminStatus(@PathVariable String email, @RequestBody Map<String, Object> body) {
        Boolean isAdmin = (Boolean) body.get("isAdmin");
        jdbcTemplate.update(
            "UPDATE users SET is_admin = ? WHERE email = ?",
            isAdmin,
            email
        );
    }

    @GetMapping("/verified")
    public List<Map<String, Object>> getVerifiedUsers() {
        return jdbcTemplate.queryForList("SELECT * FROM users WHERE is_verified = true");
    }

    @GetMapping("/admins")
    public List<Map<String, Object>> getAdminUsers() {
        return jdbcTemplate.queryForList("SELECT * FROM users WHERE is_admin = true");
    }
} 