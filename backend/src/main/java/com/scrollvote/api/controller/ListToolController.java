package com.scrollvote.api.controller;

import com.scrollvote.api.model.ListTool;
import com.scrollvote.api.repository.ListToolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/list-tools")
@CrossOrigin(origins = "*")
public class ListToolController {
    @Autowired
    private ListToolRepository listToolRepository;

    // Get all tools for a list
    @GetMapping("/{listId}")
    public List<ListTool> getToolsForList(@PathVariable Long listId) {
        return listToolRepository.findByListId(listId);
    }

    // Add a tool to a list
    @PostMapping
    public ListTool addToolToList(@RequestBody ListTool listTool) {
        return listToolRepository.save(listTool);
    }

    // Remove all tools from a list
    @DeleteMapping("/by-list/{listId}")
    public void deleteToolsByList(@PathVariable Long listId) {
        listToolRepository.deleteByListId(listId);
    }
} 