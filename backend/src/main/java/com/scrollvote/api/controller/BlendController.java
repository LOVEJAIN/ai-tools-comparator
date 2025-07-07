package com.scrollvote.api.controller;

import com.scrollvote.api.model.Blend;
import com.scrollvote.api.repository.BlendRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/blends")
@CrossOrigin(origins = "*")
public class BlendController {

    @Autowired
    private BlendRepository blendRepository;

    @GetMapping
    public List<Blend> getAllBlends() {
        return blendRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<?> createBlend(@RequestBody Map<String, Object> request) {
        try {
            Blend blend = new Blend();
            blend.setTitle((String) request.get("title"));
            blend.setTools((String) request.get("tools"));
            blend.setUseCaseTag((String) request.get("useCaseTag"));
            blend.setDescription((String) request.get("description"));
            blend.setCreatedAt(new Timestamp(System.currentTimeMillis()));

            Blend savedBlend = blendRepository.save(blend);
            return ResponseEntity.ok(savedBlend);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBlend(@PathVariable Long id, @RequestParam(value = "admin", required = false) Boolean isAdmin, @RequestParam(value = "verified", required = false) Boolean isVerified) {
        // Simple check: allow if admin or verified is true
        if (Boolean.TRUE.equals(isAdmin) || Boolean.TRUE.equals(isVerified)) {
            if (!blendRepository.existsById(id)) {
                return ResponseEntity.notFound().build();
            }
            blendRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.status(403).body("Not authorized to delete blend");
        }
    }
} 