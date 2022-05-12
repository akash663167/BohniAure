
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
import javax.persistence.PersistenceContext;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Admin
 */

@Repository
public class UserDao {

    @PersistenceContext
    private EntityManager em;

    public int SaveUser(User user) {

        return 0;
    }

    public int updateUser(User user) {
       
        return 0;
    }

    public User getUserDetails(String mail, String password) throws SQLException {
        User user = null;
        String hql = "  from User u where u.email=:email and u.password=:pass ";
        Session session = em.unwrap(Session.class);
        Query q = session.createQuery(hql,User.class);
        q.setParameter("email", mail);
        q.setParameter("pass", password);
        List resultList = q.getResultList();
        System.out.println("mail "+mail);
       User u= (User) q.getSingleResult();
        System.out.println("login ssuec " + u);
       

        // ConnectionProvider.closeConnection(con, ps, rs);
        return u;
    }
}
