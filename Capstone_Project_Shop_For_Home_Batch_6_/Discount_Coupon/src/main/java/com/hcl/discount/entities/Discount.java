package com.hcl.discount.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

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
@Entity
public class Discount {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long discountId;
	@NotNull
	private String discountCouponName;
	private long userId;
	private int discountAmount;
  

}
