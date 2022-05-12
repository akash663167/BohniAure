
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
@Table(name = "USER")
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
    @Column
    private Timestamp timestamp;

}
