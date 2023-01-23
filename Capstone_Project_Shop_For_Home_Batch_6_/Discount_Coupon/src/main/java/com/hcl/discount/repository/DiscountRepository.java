package com.hcl.discount.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.discount.entities.Discount;

@Repository
public interface DiscountRepository extends JpaRepository<Discount, Long>{
	
			Discount findDiscountBydiscountCouponName(String discountCouponName);
	
}
