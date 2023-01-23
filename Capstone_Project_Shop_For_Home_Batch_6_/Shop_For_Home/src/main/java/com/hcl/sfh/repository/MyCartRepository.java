package com.hcl.sfh.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.hcl.sfh.entities.MyCart;

@Repository
public interface MyCartRepository extends JpaRepository<MyCart, Long> {

	
//	// It display the totalBill by userId
//		@Query(value = "Select sum(item_price*plates_num) from Orders where user_id=?1")
//		public int findMyTotalBill(int userId);
//
//		// It Display the monthlyBills
//		@Query(value = "Select sum(item_price*plates_num) From Orders where date between '2022/12/01' AND '2022/12/31' ")
//		public int findMonthlyBills();

}
