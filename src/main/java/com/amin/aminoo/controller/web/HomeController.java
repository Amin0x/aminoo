package com.ameen.controller;

import com.ameen.model.User;
import com.ameen.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class HomeController {

    @Autowired
    private UserService userService;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private ProductService productService;


    @GetMapping
    public List<User> getHome() {
        List<Product> products = productService.getAllProducts();
        List<Category> categories = categoryService.getAllCategories();
    }
    
    private List<User> getBestProducts() {
        return userService.getAllUsers();
    }

    private List<User> getCatogries() {
        return userService.getAllUsers();
    }
}
