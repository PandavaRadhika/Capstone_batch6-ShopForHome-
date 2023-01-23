package com.hcl.sfh.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString

public class Discount {
	private long discountId;
	private String discountCouponName;
	private long userId;
	private int discountAmount;

}
