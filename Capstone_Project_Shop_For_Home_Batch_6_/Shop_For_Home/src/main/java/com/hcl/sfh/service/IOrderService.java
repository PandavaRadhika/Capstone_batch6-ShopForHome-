package com.hcl.sfh.service;

import java.util.Date;
import java.util.List;

import com.hcl.sfh.dto.OrderDTO;
import com.hcl.sfh.entities.Order;

public interface IOrderService {
	
	
	public Order addOrder(OrderDTO orderDTO);
	
	public 	String deleteOrderById(Long Id);
	
	public Order selectOrderById(Long Id);

	public List<Order> getAllOrders();
	
	public List<Order> getReportbydate(Date one,Date two);

}
