package com.hcl.sfh.dto;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@ToString

public class OrderDTO {
	
	private long orderId;
	private int totalBill;
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date date;

}