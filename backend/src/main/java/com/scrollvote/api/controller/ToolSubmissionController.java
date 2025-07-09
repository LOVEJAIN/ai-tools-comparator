package com.scrollvote.api.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/tool-submissions")
@CrossOrigin(origins = "*")
public class ToolSubmissionController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @PostMapping
    public void createToolSubmission(@RequestBody Map<String, Object> body) {
        jdbcTemplate.update(
            "INSERT INTO tool_submissions (user_id, tool_name, tool_url, submitter_name, submitter_email, submitter_mobile, description, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            body.get("userId"),
            body.get("toolName"),
            body.get("toolUrl"),
            body.get("submitterName"),
            body.get("submitterEmail"),
            body.get("submitterMobile"),
            body.get("description"),
            body.getOrDefault("status", "pending")
        );
    }

    @GetMapping
    public List<Map<String, Object>> getAllToolSubmissions() {
        return jdbcTemplate.queryForList("SELECT * FROM tool_submissions");
    }
} 