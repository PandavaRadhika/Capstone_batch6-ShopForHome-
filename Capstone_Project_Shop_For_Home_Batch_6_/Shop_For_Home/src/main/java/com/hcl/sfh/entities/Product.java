package com.hcl.sfh.entities;

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
public class Product {
			@Id
			@GeneratedValue (strategy = GenerationType.AUTO)
			private long productId;
			@NotNull
			private String productName;
			
			
			private int productPrice;
			private int stock;
			private int quantity;
			private String category;
			
			private String productImg;
			

}
