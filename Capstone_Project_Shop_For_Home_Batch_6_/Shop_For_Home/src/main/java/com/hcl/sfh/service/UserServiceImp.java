package com.hcl.sfh.service;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.hcl.sfh.dto.UserDTO;
import com.hcl.sfh.entities.User;
import com.hcl.sfh.exceptions.InvalidDetailsException;
import com.hcl.sfh.repository.UserRepository;

@Service
public class UserServiceImp implements IUserService {
	
	@Autowired
	UserRepository repo;
	
	@Override
	public ResponseEntity<String> userRegister(UserDTO dto) {
		
		ResponseEntity<String> response = null;
		User user = new User();
		if(dto.getUserName()!=null) {
		user.setUserName(dto.getUserName());
		user.setUserMail(dto.getUserMail());
		user.setPassword(dto.getPassword());
		repo.save(user);
		response = new ResponseEntity<String>("Registration Successfully", HttpStatus.ACCEPTED);
		}
		else {
			response = new ResponseEntity<String>("Registration failed", HttpStatus.NOT_ACCEPTABLE);
		}
		return response;
	}

	@Override
	public ResponseEntity<String> userLogin(String mail, String password, HttpSession session) {
		
		int count=0;
		ResponseEntity<String> response = null;
		List<User> userList = repo.findAll();
		for (User user : userList) {
			if(user.getUserMail().equals(mail) && user.getPassword().equals(password)) {
				count = 1;
				session.setAttribute(mail, mail);
				session.setAttribute(password, password);
				response = new ResponseEntity<String>("user login Successfully", HttpStatus.ACCEPTED);
			}
		}
		if(count == 0) {
			response = new ResponseEntity<String>("Invalid Login Credentials..", HttpStatus.NOT_ACCEPTABLE);
		}
		return response;
	}

	@Override
	public String userLogout(HttpSession session) {
		String response = null;
		session.invalidate();
		if(session.getAttribute("name")==null) {
			response = "Logout successful..";
		}
		return response;
	}

	@Override
	public String addUser(UserDTO userdto) {
		
		String response = null;
		if(userdto.getUserName()!=null) {
			User user = new User();
			
			user.setUserName(userdto.getUserName());
			user.setUserMail(userdto.getUserMail());
			user.setPassword(userdto.getPassword());
			repo.save(user);
			response = "User Added Successfully...";
			
		}
		else {
			try {

				throw new InvalidDetailsException();
			} catch (InvalidDetailsException e) {
				response ="Adding User failed...";
			}
		}
		return response;
	}

	@Override
	public String updateUser(UserDTO userdto) {
		
		int count = 0;
		String response = null;
		List<User> userList = repo.findAll();
		for (User user1 : userList) {
		if(userdto.getUserId()>0 && user1.getId()==userdto.getUserId() ) {
			User user = new User();
			user.setId(userdto.getUserId());
			user.setUserName(userdto.getUserName());
			user.setUserMail(userdto.getUserMail());
			user.setPassword(userdto.getPassword());
			repo.save(user);
			response = "User Updated Successfully...";
			
		}
		}
		if(count == 0) {
			try {

				throw new InvalidDetailsException();
			} catch (InvalidDetailsException e) {
				response ="Updating User failed...";
			}
		}
		return response;
	}

	@Override
	public String deleteUser(Long userId) {
		
		int count = 0;
		String response = null;
		List<User> userList = repo.findAll();
		for (User user : userList) {
			if(user.getId()==userId) {
				repo.deleteById(userId);
				response = "User Deleted Successfully...";
			}
		}
		if(count == 0) {
			try {

				throw new InvalidDetailsException();
			} catch (InvalidDetailsException e) {
				response ="Deleting User failed.../User Not Found...";
			}
		}
		
		return response;
	}

	@Override
	public User getUserById(Long userId) {
		
		return repo.findById(userId).orElse(null);
	}

	@Override
	public List<User> getAllUsers() {
		// TODO Auto-generated method stub
		return repo.findAll();
	}

}
