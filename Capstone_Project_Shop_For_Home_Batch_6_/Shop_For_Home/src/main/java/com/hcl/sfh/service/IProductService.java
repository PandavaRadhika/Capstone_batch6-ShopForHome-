package com.hcl.sfh.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.hcl.sfh.dto.ProductDTO;
import com.hcl.sfh.entities.Product;

public interface IProductService {
	
	public ResponseEntity<String> addProduct(ProductDTO productDTO);

	public Product updateProduct(ProductDTO productDTO);

	public String deleteProductById(Long productId);

	public Product selectProductById(Long Id);

	public List<Product> selectAllProduct();
	
	public List<Product> selectLowToHighPrice(int low,int high);
	
	public List<Product> selectByCategory(String category);
	
	
}
