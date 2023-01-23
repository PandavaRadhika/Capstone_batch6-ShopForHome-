package com.hcl.sfh.service;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.RequestEntity.BodyBuilder;

import com.hcl.sfh.dto.AdminDTO;
import com.hcl.sfh.dto.Discount;
import com.hcl.sfh.entities.Admin;
import com.hcl.sfh.vo.DiscountVo;


public interface IAdminService {

	public ResponseEntity<String> adminRegister(AdminDTO dto);
	public ResponseEntity<String> adminLogin(String mail,String password,HttpSession session);
	public String adminLogout(HttpSession session);
	
	public String addAdmin(AdminDTO admindto);
	public String updateAdmin(AdminDTO admindto);
	public String deleteAdmin(Long adminId);
	public Admin getAdminById(Long adminId);
	public List<Admin> getAllAddmin();
	
	
//	public  addDiscountByAdmin(Discount discount);
	
	public DiscountVo getDiscountById(Long id );
	
	//public BodyBuilder addDiscountByAdmin(Discount discount) ;
	
		
}
