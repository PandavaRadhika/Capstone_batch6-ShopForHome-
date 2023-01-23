package com.hcl.sfh.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

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
@Entity
@Table(name="user_table")
public class User {
				
				
				@Id
				@Column(name="user_id")
				@GeneratedValue (strategy = GenerationType.AUTO)
				private long id;
				@Size(min = 3, max = 10)
				private String userName;
				@Email
				
				private String userMail;
				@Size(min = 3, max = 10)
				private String password;
	

}
