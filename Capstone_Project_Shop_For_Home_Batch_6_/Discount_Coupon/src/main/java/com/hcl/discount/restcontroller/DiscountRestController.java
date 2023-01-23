package com.hcl.discount.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.discount.dto.DiscountDTO;
import com.hcl.discount.entities.Discount;
import com.hcl.discount.service.IDiscountService;

@RestController
@RequestMapping("/discount")
@CrossOrigin("http://localhost:3000")
public class DiscountRestController {
	@Autowired
	IDiscountService service;

	@PostMapping("/adddiscount")
	public Discount addDiscount(@RequestBody DiscountDTO discountDTO)
	{
		return service.addDiscount(discountDTO);
	}
	@DeleteMapping("/deletecoupon/{Id}")
	public String deleteDiscountCouponById(@PathVariable Long Id) {
		return service.deleteDiscountCouponById(Id);
	}
	@GetMapping("/selectcoupon/{Id}")
	public Discount selectDiscountCouponByUserId(@PathVariable Long Id) {
		return service.selectDiscountCouponByUserId(Id);
	}
	
	@GetMapping("/allDiscountCoupons")
	public List<Discount> getALLDiscountCoupons(){
		return service.getALLDiscountCoupons();
	}
	@GetMapping("/getDiscountByCouponName/{discountCouponName}")
	public Discount getDiscountByCouponName(@PathVariable String discountCouponName) {
		
		return service.getDiscountByCouponName(discountCouponName);
		
	}
}
