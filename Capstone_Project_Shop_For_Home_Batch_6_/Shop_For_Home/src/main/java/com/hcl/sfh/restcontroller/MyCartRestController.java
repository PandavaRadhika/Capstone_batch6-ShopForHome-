package com.hcl.sfh.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.sfh.dto.MyCartDTO;
import com.hcl.sfh.entities.MyCart;
import com.hcl.sfh.service.IMyCartService;

@RestController
@RequestMapping("/mycart")
@CrossOrigin("http://localhost:3000")
public class MyCartRestController {

	@Autowired
	IMyCartService service;
	
	@PostMapping("/addproducttocart")
	public MyCart addProductToCart (@RequestBody MyCartDTO mycartDTO) {
		
		
		return service.addProductToCart(mycartDTO);
		
	}

	@PutMapping("/updatemycart")
	public MyCart updateMyCart(@RequestBody MyCartDTO mycartDTO) {
		
		return service.updateMyCart(mycartDTO);
		
	}

	@DeleteMapping("/deletecart/{Id}")
	public String deleteMyCartById(@PathVariable Long Id) {
		return service.deleteMyCartById(Id);
	}

	@GetMapping("selectcart/{Id}")
	public MyCart selectMyCartById(@PathVariable Long Id) {
		return service.selectMyCartById(Id);
	}

	@GetMapping("/getallcartproductsincart")
	public List<MyCart> getALLProductsInCart(){
	
	return service.getALLProductsInCart();
	}
}
