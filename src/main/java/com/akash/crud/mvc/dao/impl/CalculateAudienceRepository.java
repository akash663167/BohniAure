/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.akash.crud.mvc.dao.impl;

import com.akash.crud.entities.AreawiseAudienceCount;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.FlushModeType;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Expression;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import static org.hibernate.query.criteria.internal.predicate.ComparisonPredicate.ComparisonOperator.EQUAL;
import static org.hibernate.query.criteria.internal.predicate.ComparisonPredicate.ComparisonOperator.GREATER_THAN;
import static org.hibernate.query.criteria.internal.predicate.ComparisonPredicate.ComparisonOperator.LESS_THAN;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author Admin
 */
public class CalculateAudienceRepository {

    @Autowired
    private final EntityManagerFactory entityManagerFactory;

    private static final String EQUAL = "=";
    private static final String NOT_EQUAL = "!-";

    public CalculateAudienceRepository(EntityManagerFactory entityManagerFactory) {
        this.entityManagerFactory = entityManagerFactory;

    }

    public Integer getData(List<HashMap<String, Object>> conditions) {
        EntityManager entityManager = entityManagerFactory.createEntityManager();

        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Integer> query = cb.createQuery(Integer.class);
        Root<AreawiseAudienceCount> root = query.from(AreawiseAudienceCount.class);

        List<Predicate> predicates = new ArrayList<>();
        conditions.forEach(ele -> {

            if (ele.get("condition").toString().equalsIgnoreCase("IS")) {

                String category = (String) ele.get("category");
                Expression<String> exp = root.get(category);
                predicates.add(exp.in((ArrayList) ele.get("sub_values")));
            } else {
                String category = (String) ele.get("category");
                Expression<String> exp = root.get(category);
                predicates.add(exp.in((ArrayList) ele.get("sub_values")).not());

            }

//            predicates.add(cb.like(root.get(field), "%" + (String) value + "%"));
//
//            Expression<String> exp = root.get("column");
//            predicates.add(exp.in(value));
//
//            predicates.add(cb.like(root.get(field), "%" + (String) value + "%"));
        });
        query.select(cb.<Integer>sum(root.get("30"))).where(predicates  .toArray(new Predicate[predicates.size()]));
        return entityManager.createQuery(query).setFlushMode(FlushModeType.COMMIT).getSingleResult();
    }

}
