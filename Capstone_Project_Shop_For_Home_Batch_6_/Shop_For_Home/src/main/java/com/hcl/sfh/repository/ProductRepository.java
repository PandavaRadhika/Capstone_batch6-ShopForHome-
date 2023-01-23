package com.hcl.sfh.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hcl.sfh.entities.Product;
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
	
	public List<Product>findProductByCategory(String category);

	@Query("select b from Product b where b.productPrice between ?1 and ?2 order by productPrice asc")
	public List<Product>findPriceByRange(int low ,int high);
}
