package com.hcl.sfh.restcontroller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.sfh.dto.AdminDTO;
import com.hcl.sfh.dto.Discount;
import com.hcl.sfh.entities.Admin;
import com.hcl.sfh.service.IAdminService;
import com.hcl.sfh.vo.DiscountVo;

@RestController
@RequestMapping("/admin")
@CrossOrigin("http://localhost:3000")
public class AdminRestController {

	@Autowired
	IAdminService service;
	
	@PostMapping("/adminregister")
	public ResponseEntity<String> adminRegister(@RequestBody AdminDTO dto){
		return service.adminRegister(dto);
	}
	@GetMapping("/adminlogin/{mail}/{password}")
	public ResponseEntity<String> adminLogin(@PathVariable String mail,@PathVariable String password,HttpSession session){
		return service.adminLogin(mail, password, session);
	}
	@GetMapping("/adminlogout")
	public String adminLogout(HttpSession session) {
		return service.adminLogout(session);
	}
	
	@PostMapping("/addadmin")
	public String addAdmin(@RequestBody AdminDTO admindto) {
		return service.addAdmin(admindto);
	}
	@PutMapping("/updateadmin")
	public String updateAdmin(@RequestBody AdminDTO admindto) {
		return service.updateAdmin(admindto);
	}
	
	@DeleteMapping("/deleteadmin/{adminId}")
	public String deleteAdmin(@PathVariable Long adminId) {
		return service.deleteAdmin(adminId);
	}
	
	@GetMapping("/getadmin/{adminId}")
	public Admin getAdminById(@PathVariable Long adminId) {
		return service.getAdminById(adminId);
	}
	@GetMapping("/getalladmins")
	public List<Admin> getAllAddmin(){
		return service.getAllAddmin();
	}
	@GetMapping("/getdiscountbyid/{id}")
	public DiscountVo getDiscountById(@PathVariable Long id ) {
		return service.getDiscountById(id);
	}
//	@PostMapping("/postdiscount")
//	public Discount addDiscountByAdmin(@RequestBody Discount discount) {
//		return service.addDiscountByAdmin(discount);
//	}

}
