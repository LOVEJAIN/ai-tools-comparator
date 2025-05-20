package com.scrollvote.api.controller;

import com.scrollvote.api.model.NewsletterSubscriber;
import com.scrollvote.api.repository.NewsletterSubscriberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/newsletter")
public class NewsletterSubscriberController {

    @Autowired
    private NewsletterSubscriberRepository repository;

    @PostMapping("/subscribe")
    public String subscribe(@RequestParam String email) {
        if (repository.existsByEmail(email)) {
            return "Already subscribed";
        }
        NewsletterSubscriber subscriber = new NewsletterSubscriber();
        subscriber.setEmail(email);
        repository.save(subscriber);
        return "Subscribed successfully";
    }
} 