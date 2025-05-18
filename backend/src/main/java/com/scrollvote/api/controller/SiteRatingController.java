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
            "INSERT INTO site_ratings (user_id, rating, comment) VALUES (?, ?, ?)",
            body.get("userId"),
            body.get("rating"),
            body.get("comment")
        );
    }

    @GetMapping
    public List<Map<String, Object>> getAllSiteRatings() {
        return jdbcTemplate.queryForList("SELECT * FROM site_ratings");
    }
} 