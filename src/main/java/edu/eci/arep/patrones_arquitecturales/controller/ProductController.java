package edu.eci.arep.patrones_arquitecturales.controller;

import edu.eci.arep.patrones_arquitecturales.services.*;
import edu.eci.arep.patrones_arquitecturales.model.*;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public List<Product> getAllProducts(){
        return productService.getAllProducts();
    }

    @GetMapping("/search")
    public Optional<Product> getProduct(@RequestParam String id){
        return productService.getProduct(id);
    }

    @PostMapping
    public Product addProduct(@RequestBody Product product){
        return productService.addProduct(product);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable String id){
        productService.deleteProduct(id);
    }

    @PutMapping("/{id}") 
    public Product updateProduct(@PathVariable String id, @RequestBody Product product){
        return productService.updateProduct(id, product);
    }
}
