package com.hcl.sfh.dto;

import javax.persistence.Id;

import com.hcl.sfh.entities.Product;
import com.hcl.sfh.entities.User;

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

public class MyCartDTO {
	@Id
	private long cartId;
	private long productId;
	private String productName;
	private int quantity;
	private int totalPrice;
	

}