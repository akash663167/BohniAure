package com.akash.crud.mvc.dao;

import java.util.List;

import com.akash.crud.entities.Product;



public interface IProductDAO {
	public abstract void createProduct(Product product);
	public abstract Product getProductById(int productId);
	public abstract void deleteProductById(int productId);
	public abstract void updateProductEmailById(String newEmail,int productId);
	public abstract List<Product> getAllProductsDetails();
}
