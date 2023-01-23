package com.hcl.sfh.dto;

import javax.persistence.Column;
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

public class ProductDTO {
	private	long productId;
	private String productName;
	private	int productPrice;
	private int stock;
	private	int quantity;
	private String category;
	@Column(length = 1000)
	private String productImg;
}