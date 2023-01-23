package com.hcl.sfh.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hcl.sfh.entities.Order;



@Repository
public interface OrderRepository  extends JpaRepository<Order, Long>
{
	@Query(value = "Select o From  Order o where o.date between '?1' AND '?2' ")
	public List<Order> getReportbydate(Date one,Date two);
	
}
