package com.hcl.sfh.entities;


import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

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
@Entity
@Table(name="order_history")
public class Order {
	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)
	@Column(name = "order_id")
	private long orderId;
	private int totalBill;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	private Date date;

}
