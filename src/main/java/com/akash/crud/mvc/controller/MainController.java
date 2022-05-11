package com.akash.crud.mvc.controller;


import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.beans.propertyeditors.CustomNumberEditor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.web.servlet.view.RedirectView;

import com.akash.crud.entities.Product;
import com.akash.crud.service.IProductService;

@Controller
public class MainController {

	@Autowired
	private IProductService ProductService;
	
	@InitBinder
	public void intiBinder(WebDataBinder bind){
		bind.setDisallowedFields(new String[]{"id"});
//		SimpleDateFormat s = new SimpleDateFormat("dd-MM-yyyy");
//		bind.registerCustomEditor(Date.class, "birthdate", new CustomDateEditor(s, false));
		
		bind.registerCustomEditor(Double.class, "price", new CustomNumberEditor(Double.class, false));
		
	}
	

	@RequestMapping("/home")
	public String home(Model model) {
		List<Product> allProductsDetails = this.ProductService.getAllProductsDetails();
		model.addAttribute("productList", allProductsDetails);
		System.out.println(allProductsDetails);
		return "home";
	}

	@ModelAttribute
	public void addModalAttribute(Model model) {
		model.addAttribute("title", "Add Product Form");
	}

	@RequestMapping("/add-product")
	public String addProduct() {

		return "add_product_form";
	}

	@RequestMapping("/addProduct")
	public RedirectView handleProduct(@ModelAttribute Product product,BindingResult result) throws Exception {
		System.out.println("product "+product);
		if(result.hasErrors()){
			throw new Exception();
		}
		ProductService.createProduct(product);
		RedirectView rdd = new RedirectView("handle");
		rdd.setUrl(ServletUriComponentsBuilder.fromCurrentContextPath().path("/home").build().toString());
		return rdd;
	}
	

}
