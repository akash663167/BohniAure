package com.akash.crud.mvc.dao.impl;



import org.springframework.stereotype.Repository;

import com.akash.crud.entities.Product;
import com.akash.crud.mvc.dao.IProductDAO;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.transaction.annotation.Transactional;

@Repository("productDao")
public class ProductDAO implements IProductDAO {

	@PersistenceContext
	private EntityManager em;

	@Override
	@Transactional
	public void createProduct(Product product) {
		// TODO Auto-generated method stub
		this.em.persist(product);
                this.em.flush();
	}

	@Override
	public Product getProductById(int productId) {
		// TODO Auto-generated method stub
		Product product = this.em.find(Product.class, productId);
		return product;
	}

	@Override
	public void deleteProductById(int productId) {
		// TODO Auto-generated method stub
		Product product = this.em.find(Product.class, productId);
		this.em.remove(product);

	}

	@Override
	public void updateProductEmailById(String newEmail, int productId) {
		// TODO Auto-generated method stub

	}

	
}
