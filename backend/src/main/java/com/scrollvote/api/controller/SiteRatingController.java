package com.scrollvote.api.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/site-ratings")
@CrossOrigin(origins = "*")
public class SiteRatingController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @PostMapping
    public void createSiteRating(@RequestBody Map<String, Object> body) {
        jdbcTemplate.update(
            "INSERT INTO site_ratings (rating, comment, name, email) VALUES (?, ?, ?, ?)",
            body.get("rating"),
            body.get("comment"),
            body.getOrDefault("name", null),
            body.getOrDefault("email", null)
        );
    }

    @GetMapping
    public List<Map<String, Object>> getAllSiteRatings() {
        return jdbcTemplate.queryForList(
            "SELECT s.*, u.name, u.email FROM site_ratings s LEFT JOIN users u ON s.user_id = u.id"
        );
    }
} 