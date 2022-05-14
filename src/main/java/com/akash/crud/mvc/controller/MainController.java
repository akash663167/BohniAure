package com.akash.crud.mvc.controller;

import org.springframework.beans.factory.annotation.Autowired;
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
import com.akash.crud.entities.User;
import com.akash.crud.mvc.dao.impl.AudienceRepository;
import com.akash.crud.mvc.dao.impl.UserDao;
import com.akash.crud.service.IProductService;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MainController {

    @Autowired
    private final IProductService ProductService;

    @Autowired
    private final UserDao userdao;
    
    @Autowired
    private final AudienceRepository audienceRepository;

    public MainController(IProductService ProductService,UserDao userdao,AudienceRepository audienceRepository) {
        this.userdao = userdao;
        this.ProductService = ProductService;
        this.audienceRepository=audienceRepository;
                
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
    public RedirectView handleProduct(@ModelAttribute Product product, BindingResult result) throws Exception {
        System.out.println("product " + product);
        if (result.hasErrors()) {
            throw new Exception();
        }
        ProductService.createProduct(product);
        RedirectView rdd = new RedirectView("handle");
        rdd.setUrl(ServletUriComponentsBuilder.fromCurrentContextPath().path("/home").build().toString());
        return rdd;
    }

    
    @RequestMapping( value = "/Login",method = RequestMethod.POST)
    public void loginHandler(@RequestParam(value = "emailid",required = false) String emailid,
            @RequestParam(value = "password",required = false) String password,
            HttpServletRequest request,
            HttpServletResponse response ) throws IOException, SQLException {

        HttpSession session = null;

        User user = userdao.getUserDetails(emailid, password);
        try (PrintWriter out = response.getWriter()) {

            if (user == null) {
                out.println("notdone");
            } else {
                session = request.getSession(true);
                session.setAttribute("CurrentUser", user);
                response.sendRedirect("dashboard.jsp");
            }
        }
    }
    
    @RequestMapping("/area")
    @ResponseBody
    public String getAreawiseAudienceData(){
    
        return audienceRepository.findAll().toString();
    }

}
