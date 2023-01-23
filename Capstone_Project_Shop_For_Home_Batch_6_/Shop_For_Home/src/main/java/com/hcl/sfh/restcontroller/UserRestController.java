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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.sfh.dto.UserDTO;
import com.hcl.sfh.entities.User;
import com.hcl.sfh.service.IUserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("http://localhost:3000")
public class UserRestController {

	@Autowired
	IUserService service;
	
	@PostMapping("/userregister")
	public ResponseEntity<String> userRegister(@RequestBody UserDTO dto)
	{
		return service.userRegister(dto);
	}
	@GetMapping("/userlogin/{mail}/{password}")
	public ResponseEntity<String> userLogin(@PathVariable String mail,@PathVariable String password,HttpSession session){
		return service.userLogin(mail, password, session);
	}

	@GetMapping("/logout")
	public String userLogout(HttpSession session) {
		return service.userLogout(session);
	}
	@PostMapping("/adduser")
	public String addUser(@RequestBody UserDTO userdto) {
		return service.addUser(userdto);
	}
	@PutMapping("/updateuser")
	public String updateUser(@RequestBody UserDTO userdto) {
		return service.updateUser(userdto);
	}
	@DeleteMapping("/deleteuser/{userId}")
	public String deleteUser(@PathVariable Long userId) {
		return service.deleteUser(userId);
	}
	@GetMapping("/getuser/{userId}")
	public User getUserById(@PathVariable Long userId) {
		return service.getUserById(userId);
	}
	@GetMapping("/getallusers")
	public List<User> getAllUsers(){
		return service.getAllUsers();
	}
}
