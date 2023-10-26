package com.abc.springboot3security.repository;
import com.abc.springboot3security.entity.UserInfo; 
import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository; 

import java.util.Optional; 

@Repository
public interface UserInfoRepository extends JpaRepository<UserInfo, Integer> { 
	Optional<UserInfo> findByName(String username); 
}
