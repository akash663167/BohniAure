
/*
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
 */
package com.akash.crud.mvc.dao.impl;

import com.akash.crud.entities.User;

import java.sql.SQLException;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Admin
 */
@Component
public class UserDao {

    @Autowired
    private final EntityManagerFactory entityManagerFactory;

    public UserDao(EntityManagerFactory entityManagerFactory) {
        this.entityManagerFactory = entityManagerFactory;

    }

    public int SaveUser(User user) {

        return 0;
    }

    public int updateUser(User user) {

        return 0;
    }

    public User getUserDetails(String mail, String password) {
        User user = null;
        String hql = "  from User u where u.email=:email and u.password=:pass ";

        EntityManager em = entityManagerFactory.createEntityManager();
        em.getTransaction().begin();
        try {

            Query q = em.createQuery(hql, User.class);
            q.setParameter("email", mail);
            q.setParameter("pass", password);
            List resultList = q.getResultList();
            System.out.println("mail " + mail);
            user = (User) q.getSingleResult();
            System.out.println("login ssuec " + user);

            em.getTransaction().commit();
        } catch (Exception e) {
            em.getTransaction().rollback();
        }
        return user;
    }
}
