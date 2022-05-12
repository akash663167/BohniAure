package com.akash.crud.service.impl;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.akash.crud.entities.Product;
import com.akash.crud.mvc.dao.IProductDAO;
import com.akash.crud.service.IProductService;


@Service("ProductService")
public class ProductService implements IProductService{
	
	@Autowired
	private IProductDAO productDao;
        
        public ProductService (IProductDAO productDao){
            this.productDao = productDao;
        }
                

	@Override
	public void createProduct(Product product) {
		
		 this.productDao.createProduct(product);
	}

	@Override
	public Product getProductById(int productId) {
		
		return this.productDao.getProductById(productId);
	}

	@Override
	public void deleteProductById(int productId) {
		
		this.productDao.deleteProductById(productId);
	}

	@Override
	public void updateProductEmailById(String newEmail, int productId) {
		
		this.productDao.updateProductEmailById(newEmail, productId);
	}

//	@Override
//	public List<Product> getAllProductsDetails() {
//		
//		return this.productDao.getAllProductsDetails();
//	}

}
