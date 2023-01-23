package com.hcl.sfh.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

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
@Entity
public class MyWishList {
	
	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)
	private long wishListId;
//	@OneToOne
//	@JoinColumn(name="user_id")
	//private long userId;
//	@ManyToOne
//	@JoinColumn(name="product_id")
	private int quantity;
	private String productName;
	private int productPrice;
	private long productId;
	

}