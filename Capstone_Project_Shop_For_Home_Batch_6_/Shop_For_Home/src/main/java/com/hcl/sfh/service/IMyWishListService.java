package com.hcl.sfh.service;

import java.util.List;

import com.hcl.sfh.dto.MyWishListDTO;
import com.hcl.sfh.entities.MyWishList;

public interface IMyWishListService {
	

		public MyWishList addWishList(MyWishListDTO myWishListDTO) ;
			
		public 	String deleteProductInWishListById(Long Id);
		
	
			
		public MyWishList selectProductInWishListById(Long Id);

	
		public List<MyWishList> getAllProductsInWishList();
}

	
	
