package com.scrollvote.api.controller;

import com.scrollvote.api.model.WaitlistEntry;
import com.scrollvote.api.repository.WaitlistEntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/waitlist")
@CrossOrigin(origins = "*")
public class WaitlistEntryController {

    @Autowired
    private WaitlistEntryRepository repository;

    @PostMapping("/join")
    public String joinWaitlist(@RequestBody WaitlistEntry entry) {
        if (repository.existsByEmail(entry.getEmail())) {
            return "Already joined";
        }
        repository.save(entry);
        return "Joined waitlist successfully";
    }

    @GetMapping
    public java.util.List<WaitlistEntry> getAllWaitlistEntries() {
        return repository.findAll();
    }
} 