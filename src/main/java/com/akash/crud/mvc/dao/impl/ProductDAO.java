package com.akash.crud.mvc.dao.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.akash.crud.entities.Product;
import com.akash.crud.mvc.dao.IProductDAO;

@Repository
public class ProductDAO implements IProductDAO {

	@Autowired
	private HibernateTemplate hibernateTemplate;

	@Override
	@Transactional
	public void createProduct(Product product) {
		// TODO Auto-generated method stub
		this.hibernateTemplate.save(product);
	}

	@Override
	public Product getProductById(int productId) {
		// TODO Auto-generated method stub
		Product product = this.hibernateTemplate.get(Product.class, productId);
		return product;
	}

	@Override
	public void deleteProductById(int productId) {
		// TODO Auto-generated method stub
		Product product = this.hibernateTemplate.load(Product.class, productId);
		this.hibernateTemplate.delete(product);

	}

	@Override
	public void updateProductEmailById(String newEmail, int productId) {
		// TODO Auto-generated method stub

	}

	@Override
	public List<Product> getAllProductsDetails() {
		// TODO Auto-generated method stub

		List<Product> productlist = this.hibernateTemplate.loadAll(Product.class);
		return productlist;
	}
}
