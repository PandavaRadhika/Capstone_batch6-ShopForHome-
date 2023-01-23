package com.hcl.sfh.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.sfh.dto.MyCartDTO;
import com.hcl.sfh.entities.MyCart;
import com.hcl.sfh.repository.MyCartRepository;

@Service
public class MyCartServiceImp implements IMyCartService {
	@Autowired
	MyCartRepository repo;

	@Override
	public MyCart addProductToCart(MyCartDTO mycartDTO) {
		MyCart myCart=new MyCart();
		myCart.setCartId(mycartDTO.getCartId());
		myCart.setProductId(mycartDTO.getProductId());
		myCart.setProductName(mycartDTO.getProductName());
		myCart.setTotalPrice(mycartDTO.getTotalPrice());
		myCart.setQuantity(mycartDTO.getQuantity());
		return repo.save(myCart);
	}

	@Override
	public MyCart updateMyCart(MyCartDTO mycartDTO) {
		MyCart myCart=new MyCart();
		myCart.setCartId(mycartDTO.getCartId());
		myCart.setProductId(mycartDTO.getProductId());
		myCart.setProductName(mycartDTO.getProductName());
		myCart.setTotalPrice(mycartDTO.getTotalPrice());
		myCart.setQuantity(mycartDTO.getQuantity());
		return repo.save(myCart);
	}

	@Override
	public String deleteMyCartById(Long Id) {
		repo.deleteById(Id);
		return "Item deleted from cart";
	}

	@Override
	public MyCart selectMyCartById(Long Id) {
	
		return repo.findById(Id).orElse(null);
	}

	@Override
	public List<MyCart> getALLProductsInCart() {
	
		return repo.findAll();
	}

}
