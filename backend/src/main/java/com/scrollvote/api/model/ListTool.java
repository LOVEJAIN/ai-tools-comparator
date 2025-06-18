package com.scrollvote.api.model;

import jakarta.persistence.*;

@Entity
@Table(name = "list_tools")
public class ListTool {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "list_id", nullable = false)
    private Long listId;

    @Column(name = "tool_id", nullable = false)
    private String toolId;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public Long getListId() { return listId; }
    public void setListId(Long listId) { this.listId = listId; }
    public String getToolId() { return toolId; }
    public void setToolId(String toolId) { this.toolId = toolId; }
} 