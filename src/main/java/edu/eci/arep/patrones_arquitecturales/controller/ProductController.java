package edu.eci.arep.patrones_arquitecturales.controller;

import edu.eci.arep.patrones_arquitecturales.services.*;
import edu.eci.arep.patrones_arquitecturales.model.*;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public List<Product> getAllProducts(){
        return productService.getAllProducts();
    }

    @GetMapping("/search")
    public Product getProduct(@RequestParam String id){
        return productService.getProduct(id);
    }

    @PostMapping
    public Product addProduct(@RequestBody Product product){
        return productService.addProduct(product);
    }

    @DeleteMapping
    public void deleteProduct(@RequestParam String id){
        productService.deleteProduct(id);
    }

    @PutMapping 
    public Product updateProduct(@RequestParam String id, @RequestBody Product product){
        return productService.updateProduct(id, product);
    }
}
