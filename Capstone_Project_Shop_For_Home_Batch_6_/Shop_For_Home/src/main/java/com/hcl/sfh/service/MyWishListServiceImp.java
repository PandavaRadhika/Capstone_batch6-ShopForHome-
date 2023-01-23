package com.hcl.sfh.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.sfh.dto.MyWishListDTO;

import com.hcl.sfh.entities.MyWishList;
import com.hcl.sfh.repository.MyWishListRepository;

@Service
public class MyWishListServiceImp implements IMyWishListService {
	
	@Autowired
	MyWishListRepository repo;

	@Override
	public MyWishList addWishList(MyWishListDTO myWishListDTO) {
		
		MyWishList myWishList=new MyWishList();
		
		myWishList.setWishListId(myWishListDTO.getWishListId());
		myWishList.setQuantity(myWishListDTO.getQuantity());
		
		myWishList.setProductName(myWishListDTO.getProductName());
		myWishList.setProductPrice(myWishListDTO.getProductPrice());
		
		myWishList.setProductId(myWishListDTO.getProductId());
		return repo.save(myWishList);
	}

	@Override
	public String deleteProductInWishListById(Long Id) {
		repo.deleteById(Id);
		return "Product deleted successfully from wishlist";
	}

	@Override
	public MyWishList selectProductInWishListById(Long Id) {
		
		return repo.findById(Id).orElse(null);
	}

	@Override
	public List<MyWishList> getAllProductsInWishList() {
		
		return repo.findAll();
	}

}
