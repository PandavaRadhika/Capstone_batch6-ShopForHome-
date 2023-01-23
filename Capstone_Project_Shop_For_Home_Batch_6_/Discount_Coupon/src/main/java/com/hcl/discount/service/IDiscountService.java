package com.hcl.discount.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.hcl.discount.dto.DiscountDTO;
import com.hcl.discount.entities.Discount;


public interface IDiscountService {

	public Discount addDiscount(DiscountDTO discountDTO);
	
	public String deleteDiscountCouponById(Long id);
	
	public Discount selectDiscountCouponByUserId(Long Id);

	public List<Discount> getALLDiscountCoupons();
	public Discount getDiscountByCouponName(String discountCouponName);
}
