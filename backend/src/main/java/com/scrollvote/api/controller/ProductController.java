package com.scrollvote.api.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*")
public class ProductController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping
    public List<Map<String, Object>> getAllProducts() {
        return jdbcTemplate.queryForList("SELECT * FROM products");
    }

    @GetMapping("/{id}")
    public Map<String, Object> getProduct(@PathVariable Long id) {
        return jdbcTemplate.queryForMap("SELECT * FROM products WHERE id = ?", id);
    }

    @PostMapping
    public void createProduct(@RequestBody Map<String, Object> product) {
        jdbcTemplate.update(
            "INSERT INTO products (name, description, image_url) VALUES (?, ?, ?)",
            product.get("name"),
            product.get("description"),
            product.get("imageUrl")
        );
    }
} 