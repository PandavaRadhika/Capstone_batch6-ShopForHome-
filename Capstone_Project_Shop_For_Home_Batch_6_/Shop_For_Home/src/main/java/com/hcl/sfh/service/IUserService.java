package com.hcl.sfh.service;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.http.ResponseEntity;

import com.hcl.sfh.dto.UserDTO;
import com.hcl.sfh.entities.User;

public interface IUserService {

	public ResponseEntity<String> userRegister(UserDTO dto);
	public ResponseEntity<String> userLogin(String mail,String password,HttpSession session);
	public String userLogout(HttpSession session);
	
	public String addUser(UserDTO userdto);
	public String updateUser(UserDTO userdto);
	public String deleteUser(Long userId);
	public User getUserById(Long userId);
	public List<User> getAllUsers();
	
}
