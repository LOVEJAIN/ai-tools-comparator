package com.scrollvote.api.model;

import jakarta.persistence.*;
import lombok.Data;
import java.sql.Timestamp;

@Data
@Entity
@Table(name = "blends")
public class Blend {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String tools;
    private String useCaseTag;
    private String description;
    
    @Column(name = "created_at")
    private Timestamp createdAt;

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getTools() { return tools; }
    public void setTools(String tools) { this.tools = tools; }

    public String getUseCaseTag() { return useCaseTag; }
    public void setUseCaseTag(String useCaseTag) { this.useCaseTag = useCaseTag; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Timestamp getCreatedAt() { return createdAt; }
    public void setCreatedAt(Timestamp createdAt) { this.createdAt = createdAt; }
} 