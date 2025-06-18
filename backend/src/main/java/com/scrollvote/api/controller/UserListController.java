package com.scrollvote.api.controller;

import com.scrollvote.api.model.UserList;
import com.scrollvote.api.repository.UserListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/lists")
@CrossOrigin(origins = "*")
public class UserListController {
    @Autowired
    private UserListRepository userListRepository;

    // Get all public lists
    @GetMapping("/public")
    public List<UserList> getPublicLists() {
        return userListRepository.findByIsPublicTrue();
    }

    // Get all private lists for a user
    @GetMapping("/private/{userId}")
    public List<UserList> getPrivateLists(@PathVariable Long userId) {
        return userListRepository.findByUserId(userId);
    }

    // Create a new list
    @PostMapping
    public UserList createList(@RequestBody UserList list) {
        return userListRepository.save(list);
    }

    // Delete a list (admin can delete any, user can delete their own)
    @DeleteMapping("/{id}")
    public void deleteList(@PathVariable Long id) {
        userListRepository.deleteById(id);
    }
} 