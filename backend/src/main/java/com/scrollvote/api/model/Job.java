package com.scrollvote.api.model;

import jakarta.persistence.*;
import lombok.Data;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Data
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String company;
    private String location;
    @Column(name = "description")
    private String description;
    @JsonProperty("postedBy")
    @Column(name = "posted_by")
    private String postedBy;
    private String level;
    private String sector;
} 