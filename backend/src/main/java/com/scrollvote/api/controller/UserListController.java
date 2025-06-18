package com.scrollvote.api.controller;

import com.scrollvote.api.model.UserList;
import com.scrollvote.api.repository.UserListRepository;
import com.scrollvote.api.model.ListTool;
import com.scrollvote.api.repository.ListToolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.scrollvote.api.model.User;
import com.scrollvote.api.repository.UserRepository;

@RestController
@RequestMapping("/api/lists")
@CrossOrigin(origins = "*")
public class UserListController {
    @Autowired
    private UserListRepository userListRepository;

    @Autowired
    private ListToolRepository listToolRepository;

    @Autowired
    private UserRepository userRepository;

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

    // Add this DTO class inside the controller or as a static inner class
    public static class PublicListWithTools {
        public Long id;
        public String title;
        public String creator;
        public java.util.List<String> toolIds;
        public PublicListWithTools(Long id, String title, String creator, java.util.List<String> toolIds) {
            this.id = id;
            this.title = title;
            this.creator = creator;
            this.toolIds = toolIds;
        }
    }

    // New endpoint to create a list with tools in one go
    @PostMapping("/full")
    public PublicListWithTools createListWithTools(@RequestBody CreateListWithToolsRequest req) {
        // 1. Create the list
        UserList list = new UserList();
        list.setUserId(req.userId);
        list.setTitle(req.title);
        list.setIsPublic(req.isPublic);
        list = userListRepository.save(list);
        // 2. Add tools
        for (String toolId : req.toolIds) {
            ListTool lt = new ListTool();
            lt.setListId(list.getId());
            lt.setToolId(toolId);
            listToolRepository.save(lt);
        }
        // 3. Get creator email
        User user = userRepository.findById(req.userId).orElse(null);
        String creator = user != null ? user.getEmail() : String.valueOf(req.userId);
        return new PublicListWithTools(list.getId(), list.getTitle(), creator, req.toolIds);
    }

    // DTO for createListWithTools
    public static class CreateListWithToolsRequest {
        public Long userId;
        public String title;
        public Boolean isPublic;
        public java.util.List<String> toolIds;
    }

    // New endpoint to return public lists with toolIds
    @GetMapping("/public-with-tools")
    public List<PublicListWithTools> getPublicListsWithTools() {
        List<UserList> lists = userListRepository.findByIsPublicTrue();
        List<PublicListWithTools> result = new java.util.ArrayList<>();
        for (UserList list : lists) {
            List<ListTool> tools = listToolRepository.findByListId(list.getId());
            List<String> toolIds = new java.util.ArrayList<>();
            for (ListTool tool : tools) {
                toolIds.add(tool.getToolId());
            }
            // Get creator email from User table
            User user = userRepository.findById(list.getUserId()).orElse(null);
            String creator = user != null ? user.getEmail() : String.valueOf(list.getUserId());
            result.add(new PublicListWithTools(list.getId(), list.getTitle(), creator, toolIds));
        }
        return result;
    }
} 