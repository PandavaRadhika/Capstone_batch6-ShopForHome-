package com.hcl.sfh.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.sfh.dto.MyWishListDTO;
import com.hcl.sfh.entities.MyWishList;
import com.hcl.sfh.service.IMyWishListService;

@RestController
@RequestMapping("/mywishlist")
@CrossOrigin("http://localhost:3000")
public class MyWishListRestController {
	
	@Autowired
	IMyWishListService service;
	
	
	
	@PostMapping("/addWishList")
	public MyWishList addWishList(@RequestBody MyWishListDTO myWishListDTO) {
		
		return service.addWishList(myWishListDTO);
	}
	
	@DeleteMapping("/deleteProductInWishList/{Id}")
	public 	String deleteProductInWishListById(@PathVariable Long Id) {
		
		return service.deleteProductInWishListById(Id);
	}

	@GetMapping("/selectProductInWishList/{Id}")
	public MyWishList selectProductInWishListById(@PathVariable Long Id) {
		
		return service.selectProductInWishListById(Id);
	}

	@GetMapping("/getAllProductsInWishList")
	public List<MyWishList> getAllProductsInWishList(){
		
		return service.getAllProductsInWishList();
	}

}
