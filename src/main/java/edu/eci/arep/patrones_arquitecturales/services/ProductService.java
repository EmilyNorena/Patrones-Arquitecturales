package edu.eci.arep.patrones_arquitecturales.services;

import edu.eci.arep.patrones_arquitecturales.repository.*;
import edu.eci.arep.patrones_arquitecturales.model.*;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository = null; 

    public Product addProduct(Product product){
        return productRepository.save(product);
    }

    public void deleteProduct(String id){
        productRepository.deleteById(id);
    }

    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    public Optional<Product> getProduct(String id){
        return productRepository.findById(id);
    }

    public Product updateProduct(String id, Product newProduct){
        Product existingProduct = productRepository.findById(id).orElseThrow(() -> new RuntimeException("Producto no encontrado"));
        existingProduct.setAddress(newProduct.getAddress());
        existingProduct.setPrice(newProduct.getPrice());
        existingProduct.setSize(newProduct.getSize());
        existingProduct.setDescription(newProduct.getDescription());
        return productRepository.save(existingProduct);
    }

}
