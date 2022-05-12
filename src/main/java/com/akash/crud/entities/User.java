
/*
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
 */
package com.akash.crud.entities;

import java.sql.Timestamp;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author Admin
 */
@Entity
@Table(name = "USERS")
public class User implements java.io.Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;

    @Column
    private String contactNo;
    @Column
    private String name;
    @Column
    private String email;
    @Column
    private String password;
    @Column
    private String gender;
    

    public User() {
    }

    
    public User(int id, String contactNo, String name, String email, String password, String gender) {
        this.id = id;
        this.contactNo = contactNo;
        this.name = name;
        this.email = email;
        this.password = password;
        this.gender = gender;
     
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getContactNo() {
        return contactNo;
    }

    public void setContactNo(String contactNo) {
        this.contactNo = contactNo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

   
    @Override
    public String toString() {
        return "User{" + "id=" + id + ", contactNo=" + contactNo + ", name=" + name + ", email=" + email + ", password=" + password + ", gender=" + gender +" );";
    }
    
    

}
