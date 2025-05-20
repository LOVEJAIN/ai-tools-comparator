package com.scrollvote.api.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/contact-messages")
@CrossOrigin(origins = "*")
public class ContactMessageController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @PostMapping
    public void createContactMessage(@RequestBody Map<String, Object> body) {
        jdbcTemplate.update(
            "INSERT INTO contact_messages (user_id, name, email, message, source) VALUES (?, ?, ?, ?, ?)",
            body.get("userId"),
            body.get("name"),
            body.get("email"),
            body.get("message"),
            body.get("source")
        );
    }

    @GetMapping
    public List<Map<String, Object>> getAllContactMessages() {
        return jdbcTemplate.queryForList("SELECT * FROM contact_messages");
    }
} 