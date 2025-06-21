package com.scrollvote.api.repository;

import com.scrollvote.api.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByNameIn(List<String> names);
} 