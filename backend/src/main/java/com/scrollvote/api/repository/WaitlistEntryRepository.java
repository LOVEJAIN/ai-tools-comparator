package com.scrollvote.api.repository;

import com.scrollvote.api.model.WaitlistEntry;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WaitlistEntryRepository extends JpaRepository<WaitlistEntry, Long> {
    boolean existsByEmail(String email);
} 