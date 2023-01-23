package com.hcl.discount.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.hcl.discount.dto.DiscountDTO;
import com.hcl.discount.entities.Discount;
import com.hcl.discount.repository.DiscountRepository;
@Service
public class DiscountServiceImp implements IDiscountService {
	@Autowired
	DiscountRepository repo;
	
	@Override
	public Discount addDiscount(DiscountDTO discountDTO) {
		Discount discount=new Discount();
		discount.setDiscountCouponName(discountDTO.getDiscountCouponName());
		discount.setDiscountAmount(discountDTO.getDiscountAmount());
		discount.setUserId(discountDTO.getUserId());
		
		return repo.save(discount);
	}
	
	@Override
	public List<Discount> getALLDiscountCoupons() {
		
		return repo.findAll();
	}

	@Override
	public String deleteDiscountCouponById(Long Id) {
		repo.deleteById(Id);
		return "Coupon deleted successfully";
	}

	@Override
	public Discount selectDiscountCouponByUserId(Long Id) {
		
		return repo.findById(Id).orElse(null);
	}

	@Override
	public Discount getDiscountByCouponName(String discountCouponName) {
		
		return repo.findDiscountBydiscountCouponName(discountCouponName);
	}

	

}
