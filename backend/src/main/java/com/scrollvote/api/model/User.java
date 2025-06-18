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
    private Timestamp lastLogin;

    public String getEmail() {
        return this.email;
    }
} 