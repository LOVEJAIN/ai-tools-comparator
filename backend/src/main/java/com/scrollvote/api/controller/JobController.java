package com.scrollvote.api.controller;

import com.scrollvote.api.model.Job;
import com.scrollvote.api.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin(origins = "*")
public class JobController {
    @Autowired
    private JobRepository jobRepository;

    @GetMapping
    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<?> createJob(@RequestBody Job job) {
        if (job.getTitle() == null || job.getTitle().isEmpty() ||
            job.getCompany() == null || job.getCompany().isEmpty() ||
            job.getLocation() == null || job.getLocation().isEmpty() ||
            job.getDescription() == null || job.getDescription().isEmpty() ||
            job.getPostedBy() == null || job.getPostedBy().isEmpty()) {
            return ResponseEntity.badRequest().body("All fields are required.");
        }
        return ResponseEntity.ok(jobRepository.save(job));
    }

    @DeleteMapping("/{id}")
    public void deleteJob(@PathVariable Long id) {
        jobRepository.deleteById(id);
    }
} 