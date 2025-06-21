package com.scrollvote.api.repository;

import com.scrollvote.api.model.ListTool;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ListToolRepository extends JpaRepository<ListTool, Long> {
    List<ListTool> findByListId(Long listId);
    void deleteByListId(Long listId);
} 