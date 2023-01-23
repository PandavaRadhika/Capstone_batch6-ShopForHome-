package com.hcl.sfh.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hcl.sfh.dto.OrderDTO;
import com.hcl.sfh.entities.Order;
import com.hcl.sfh.repository.OrderRepository;

@Service
public class OrderServiceImp implements IOrderService {

	@Autowired
	OrderRepository repo;
	
	@Override
	public Order addOrder(OrderDTO orderDTO) {
		
		Order order=new Order();
		order.setOrderId(orderDTO.getOrderId());
		order.setTotalBill(orderDTO.getTotalBill());
		order.setDate(orderDTO.getDate());
		
		return repo.save(order);
	}

	@Override
	public String deleteOrderById(Long Id) {
		repo.deleteById(Id);
		return "Order deleted successfully";
	}

	@Override
	public Order selectOrderById(Long Id) {
		
		return repo.findById(Id).orElse(null);
	}

	@Override
	public List<Order> getAllOrders() {
		return repo.findAll();
	}

	@Override
	public List<Order> getReportbydate(Date one, Date two) {
		return getReportbydate(one, two);
	}

	
	

}
