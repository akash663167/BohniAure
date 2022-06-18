/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.akash.crud.mvc.dao.impl;

import com.akash.crud.entities.POIwiseAudienceCount;
import java.util.ArrayList;
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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 *
 * @author Admin
 */
@Component
public class CalculateAudienceRepository {

    @Autowired
    private final EntityManagerFactory entityManagerFactory;

    private static final String EQUAL = "=";
    private static final String NOT_EQUAL = "!-";

    public CalculateAudienceRepository(EntityManagerFactory entityManagerFactory) {
        this.entityManagerFactory = entityManagerFactory;

    }

    public Long getData(List<HashMap<String, Object>> conditions) {
        EntityManager entityManager = entityManagerFactory.createEntityManager();

        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Long> query = cb.createQuery(Long.class);
        Root<POIwiseAudienceCount> root = query.from(POIwiseAudienceCount.class);

        List<Predicate> predicates = new ArrayList<>();
        String duration = "30";

        conditions.forEach(ele -> {

            String category = ((String) ele.get("category")).toLowerCase();
            
            if (category.equalsIgnoreCase("DURATION")) {
                duration.replaceAll(".*\\z", ((ArrayList) ele.get("sub_values")).get(0).toString());
                return;
            }
            Expression<String> exp = root.get(category);
            if (ele.get("condition").toString().equalsIgnoreCase("IS")) {
                predicates.add(exp.in((ArrayList) ele.get("sub_values")));
            } else {
                predicates.add(exp.in((ArrayList) ele.get("sub_values")).not());
            }

//            predicates.add(cb.like(root.get(field), "%" + (String) value + "%"));
//
//            Expression<String> exp = root.get("column");
//            predicates.add(exp.in(value));
//
//            predicates.add(cb.like(root.get(field), "%" + (String) value + "%"));
        });
        System.err.println("duration " + duration);
        query.select(cb.<Long>sum(root.get("audienceCount_" + duration))).where(predicates.toArray(new Predicate[predicates.size()]));
        Long count = entityManager.createQuery(query).setFlushMode(FlushModeType.COMMIT).getSingleResult();
        System.out.println("com.akash.crud.mvc.dao.impl.CalculateAudienceRepository.getData() " + count);
        return count;
    }

}
