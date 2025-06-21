package com.scrollvote.api.model;

import jakarta.persistence.*;
import lombok.Data;
import java.sql.Timestamp;

@Data
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String googleId;
    private String email;
    private String name;
    private Timestamp createdAt;
    @Column(name = "last_login")
    private Timestamp lastLogin;

    public Long getId() { return id; }
    public String getEmail() { return email; }
    public String getName() { return name; }
    public String getGoogleId() { return googleId; }
    public Timestamp getCreatedAt() { return createdAt; }
    public Timestamp getLastLogin() { return lastLogin; }

    public void setId(Long id) { this.id = id; }
    public void setGoogleId(String googleId) { this.googleId = googleId; }
    public void setEmail(String email) { this.email = email; }
    public void setName(String name) { this.name = name; }
    public void setCreatedAt(Timestamp createdAt) { this.createdAt = createdAt; }
    public void setLastLogin(Timestamp lastLogin) { this.lastLogin = lastLogin; }
} 