package com.hcl.sfh.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.hcl.sfh.dto.ProductDTO;
import com.hcl.sfh.entities.Product;
import com.hcl.sfh.repository.ProductRepository;

@Service
public class ProductServiceImp implements IProductService {
	
	@Autowired
	ProductRepository repo;

	@Override
	public ResponseEntity<String> addProduct(ProductDTO productDTO) {
		
		
		Product product=new Product();
		product.setStock(productDTO.getStock());
		product.setProductName(productDTO.getProductName());
		product.setProductImg(productDTO.getProductImg());
		product.setProductPrice(productDTO.getProductPrice());
		product.setQuantity(productDTO.getQuantity());
		product.setCategory(productDTO.getCategory());
		ResponseEntity<String> response = null;
		if (product.getProductPrice() > 0 && product.getQuantity() > 0) {
			repo.save(product);
			response = new ResponseEntity<String>("Product Added Successfully...", HttpStatus.OK);
		} else {
			response = new ResponseEntity<String>("Invalid entry!!Please enter valid details...", HttpStatus.BAD_REQUEST);
		}

		return response;
	}

	@Override
	public Product updateProduct(ProductDTO productDTO) {
		
		Product product=new Product();
		product.setStock(productDTO.getStock());
		product.setProductId(productDTO.getProductId());
		product.setProductImg(productDTO.getProductImg());
		product.setProductName(productDTO.getProductName());
		product.setProductPrice(productDTO.getProductPrice());
		product.setQuantity(productDTO.getQuantity());
		product.setCategory(productDTO.getCategory());
		return repo.save(product);
	}

	@Override
	public String deleteProductById(Long productId) {
		repo.deleteById(productId);
		return "product with Id "+productId+" is deleted";
	}

	@Override
	public Product selectProductById(Long Id) {
		// TODO Auto-generated method stub
		return repo.findById(Id).orElse(null);
	}

	@Override
	public List<Product> selectAllProduct() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

	@Override
	public List<Product> selectLowToHighPrice(int low, int high) {
		
		return repo.findPriceByRange(low, high);
	}

	@Override
	public List<Product> selectByCategory(String category) {
		
		return repo.findProductByCategory(category);
	}

}
