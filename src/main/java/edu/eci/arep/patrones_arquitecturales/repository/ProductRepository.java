package edu.eci.arep.patrones_arquitecturales.repository;

import edu.eci.arep.patrones_arquitecturales.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, String>{
    
}


