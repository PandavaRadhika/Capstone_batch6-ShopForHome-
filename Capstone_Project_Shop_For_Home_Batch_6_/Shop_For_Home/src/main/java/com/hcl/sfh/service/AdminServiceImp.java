package com.hcl.sfh.service;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity.BodyBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.hcl.sfh.dto.AdminDTO;
import com.hcl.sfh.dto.Discount;
import com.hcl.sfh.entities.Admin;
import com.hcl.sfh.exceptions.InvalidDetailsException;
import com.hcl.sfh.repository.AdminRepository;
import com.hcl.sfh.vo.DiscountVo;

@Service
public class AdminServiceImp implements IAdminService {

	@Autowired
	AdminRepository repo;
	@Autowired
	RestTemplate restTemplate;
	
	@Override
	public ResponseEntity<String> adminRegister(AdminDTO dto) {
		ResponseEntity<String> response = null;
		Admin admin = new Admin();
		if(dto.getAdminName()!= null) {
			admin.setAdminName(dto.getAdminName());
			admin.setAdminMail(dto.getAdminMail());
			admin.setPassword(dto.getPassword());
			repo.save(admin);
			response = new ResponseEntity<String>("Registration Successfull", HttpStatus.ACCEPTED);
		}
		else {
			response = new ResponseEntity<String>("Registration failed", HttpStatus.NOT_ACCEPTABLE);
		}
		return response;
	}

	@Override
	public ResponseEntity<String> adminLogin(String mail, String password, HttpSession session) {
		
		int count =0;
		ResponseEntity<String> response = null;
		List<Admin> adminList = repo.findAll();
		for (Admin admin : adminList) {
			if(admin.getAdminMail().equals(mail) && admin.getPassword().equals(password)) {
				count = 1;
				session.setAttribute(password, password);
				session.setAttribute(mail, mail);
				response = new ResponseEntity<String>("admin login Successfull", HttpStatus.ACCEPTED);
			}
		}
		if(count == 0) {
			response = new ResponseEntity<String>("Invalid Login Credentials..", HttpStatus.NOT_ACCEPTABLE);
		}
		return response;
	}

	@Override
	public String adminLogout(HttpSession session) {
		String response = null;
		session.invalidate();
		if(session.getAttribute("name")==null) {
			response = "Logout successful..";
		}
		return response;
	}

	@Override
	public String addAdmin(AdminDTO admindto) {
		
		String response = null;
		if(admindto.getAdminId()>0) {
			Admin admin = new Admin();
			admin.setAdminId(admindto.getAdminId());
			admin.setAdminName(admindto.getAdminName());
			admin.setAdminMail(admindto.getAdminMail());
			admin.setPassword(admindto.getPassword());
			repo.save(admin);
			response = "Admin added successfully...";
		}
		else {
			try {

				throw new InvalidDetailsException();
			} catch (InvalidDetailsException e) {
				response ="Adding admin failed...";
			}
		}
		return response;
	}

	@Override
	public String updateAdmin(AdminDTO admindto) {
		
		int count = 0;
		String response = null;
		List<Admin> adminList = repo.findAll();
		for (Admin admin1 : adminList) {
		if(admindto.getAdminId()>0 && admindto.getAdminId()== admin1.getAdminId()) {
			Admin admin = new Admin();
			admin.setAdminId(admindto.getAdminId());
			admin.setAdminName(admindto.getAdminName());
			admin.setAdminMail(admindto.getAdminMail());
			admin.setPassword(admindto.getPassword());
			repo.save(admin);
			response = "Admin updated successfully...";
		}
		}
		if(count == 0) {
			try {

				throw new InvalidDetailsException();
			} catch (InvalidDetailsException e) {
				response ="Updating admin failed...";
			}
		}
		return response;
	}

	@Override
	public String deleteAdmin(Long adminId) {
		
		int count = 0;
		String response = null;
		List<Admin> adminList = repo.findAll();
		for (Admin admin : adminList) {
			if(admin.getAdminId()==adminId) {
				repo.deleteById(adminId);
				response = "Admin deleted successfully";
			}
		}
		if(count == 0) {
			try {

				throw new InvalidDetailsException();
			} catch (InvalidDetailsException e) {
				response ="Deleting Admin failed.../Admin Not Found...";
			}
		}
		
		return response;
	}

	@Override
	public Admin getAdminById(Long adminId) {
		
		return repo.findById(adminId).orElse(null);
	}

	@Override
	public List<Admin> getAllAddmin() {
		
		return repo.findAll();
	}

	@Override
	public DiscountVo getDiscountById (Long id) {
		Discount dicount = restTemplate.getForObject("http://localhost:8082/api/discount/allDiscountCoupons"+id, Discount.class);
		DiscountVo dicountVo= new DiscountVo(dicount);
		return dicountVo;
	}

//	@Override
//	public Discount addDiscountByAdmin(Discount discount) {
//		
//		Discount discount2= restTemplate.postForObject("http://localhost:8082/api/discount/adddiscount",discount, Discount.class);
//	
//		return;
//	}
	

//	@Override
//	public BodyBuilder addDiscountByAdmin(Discount discount) 
//	{
//		System.out.println( file.getBytes().length);
//		DiscountVo discount2 = new ImageModel(file.getOriginalFilename(), file.getContentType(),
//				                                                                  compressBytes(file.getBytes()));
//		repo.save(discount);
//		return ResponseEntity.status(HttpStatus.OK);
//	}

}
