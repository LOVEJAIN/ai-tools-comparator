package com.scrollvote.api.repository;

import com.scrollvote.api.model.UserList;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface UserListRepository extends JpaRepository<UserList, Long> {
    List<UserList> findByUserId(Long userId);
    List<UserList> findByIsPublicTrue();
    List<UserList> findByUserIdAndIsPublicFalse(Long userId);
} 