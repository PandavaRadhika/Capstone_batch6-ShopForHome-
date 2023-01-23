package com.hcl.sfh.dto;

import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString

public class UserDTO {
	private long userId;
	private String userName;
	private	String userMail;
	private	String password;
	

}