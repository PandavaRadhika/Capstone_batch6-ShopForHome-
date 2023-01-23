package com.hcl.discount.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString

public class DiscountDTO {
	
	private long discountId;
	private String discountCouponName;
	private long userId;
	private int discountAmount;

}
