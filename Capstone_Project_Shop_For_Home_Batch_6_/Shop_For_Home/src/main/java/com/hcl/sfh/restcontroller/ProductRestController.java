package com.hcl.sfh.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.sfh.dto.ProductDTO;
import com.hcl.sfh.entities.Product;
import com.hcl.sfh.service.IProductService;

@RestController
@RequestMapping("/product")
@CrossOrigin("http://localhost:3000")
public class ProductRestController {
	@Autowired
	IProductService service;
	@PostMapping("/addProduct")
	public ResponseEntity<String> addProduct(@RequestBody ProductDTO productDTO) {
		return service.addProduct(productDTO);
	}
	@PutMapping("/updateProduct")
	public Product updateProduct(@RequestBody ProductDTO productDTO) {
		return service.updateProduct(productDTO);
	}
	
	@DeleteMapping("/deleteProduct/{productId}")
	public String deleteProductById(@PathVariable Long productId) {
		return service.deleteProductById(productId);
	}
	
	@GetMapping("/getProduct/{Id}")
	public Product selectProductById(@PathVariable Long Id) {
		return service.selectProductById(Id);
	}
	
	@GetMapping("/getAllProduct")
	public List<Product> selectAllProduct(){
		return service.selectAllProduct();
	}
	@GetMapping("/getlowtohigh/{low}/{high}")
	public List<Product> selectProductLowToHighPrice(@PathVariable int low,@PathVariable int high){
		return service.selectLowToHighPrice(low, high);
	}
	@GetMapping("/getbycategory/{category}")
	public List<Product> selectByCategory(@PathVariable String category){
		return service.selectByCategory(category);
	}

}
