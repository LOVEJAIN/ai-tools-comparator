package com.scrollvote.api.model;

import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
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
    private String link;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getPostedBy() { return postedBy; }
    public void setPostedBy(String postedBy) { this.postedBy = postedBy; }
    public String getLevel() { return level; }
    public void setLevel(String level) { this.level = level; }
    public String getSector() { return sector; }
    public void setSector(String sector) { this.sector = sector; }
    public String getLink() { return link; }
    public void setLink(String link) { this.link = link; }
} 