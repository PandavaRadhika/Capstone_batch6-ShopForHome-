package com.hcl.sfh.dto;


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

public class MyWishListDTO {
	
	private long wishListId;
	private int quantity;
	private String productName;
	private int productPrice;
	
	private long productId;
	

}
