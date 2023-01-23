package com.hcl.sfh.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hcl.sfh.entities.MyWishList;

@Repository
public interface MyWishListRepository extends JpaRepository<MyWishList, Long>{

}
