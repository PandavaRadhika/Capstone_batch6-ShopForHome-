package com.hcl.sfh.restcontroller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hcl.sfh.dto.OrderDTO;
import com.hcl.sfh.entities.Order;
import com.hcl.sfh.service.IOrderService;

@RestController
@RequestMapping("/order")
@CrossOrigin("http://localhost:3000")
public class OrderRestController {
		@Autowired
		IOrderService service;
	
	@PostMapping("/addorder")
	public Order addOrder(@RequestBody OrderDTO orderDTO) {
		
		return service.addOrder(orderDTO);

	}

	@DeleteMapping("/deleteorder/{id}")
	public String deleteOrderById(@PathVariable Long Id) {
			return service.deleteOrderById(Id);
	}

	@GetMapping("/selectOrder/{id}")
	public Order selectOrderById(@PathVariable Long Id) {

		return service.selectOrderById(Id);
	}

	@GetMapping("/getallorders")
	public List<Order> getAllOrders() {

			return service.getAllOrders();
	}
	@GetMapping("/getreportsbydate/{one}/{two}")
	public List<Order> getReports(@PathVariable Date one,@PathVariable Date two){
		return service.getReportbydate(one,two);
	}

}
