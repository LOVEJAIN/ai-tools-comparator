package com.scrollvote.api.model;

import jakarta.persistence.*;
import lombok.Data;
import java.sql.Timestamp;

@Data
@Entity
@Table(name = "tool_submissions")
public class ToolSubmission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;
    private String toolName;
    private String toolUrl;
    private String submitterName;
    private String submitterEmail;
    private String submitterMobile;
    private String description;
    private String status;
    private Timestamp createdAt;
} 