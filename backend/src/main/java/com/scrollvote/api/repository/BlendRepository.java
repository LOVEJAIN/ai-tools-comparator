package com.scrollvote.api.repository;

import com.scrollvote.api.model.Blend;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlendRepository extends JpaRepository<Blend, Long> {
} 