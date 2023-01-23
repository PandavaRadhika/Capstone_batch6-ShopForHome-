package com.hcl.sfh.service;

import java.util.List;

import com.hcl.sfh.dto.MyCartDTO;
import com.hcl.sfh.entities.MyCart;


public interface IMyCartService {

	
	public MyCart addProductToCart(MyCartDTO mycartDTO);

	public MyCart updateMyCart(MyCartDTO mycartDTO);

	public String deleteMyCartById(Long Id);

	public MyCart selectMyCartById(Long Id);

	public List<MyCart> getALLProductsInCart();
	
}
