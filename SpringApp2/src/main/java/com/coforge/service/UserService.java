package com.coforge.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.coforge.model.User;

import lombok.Data;

@Service
@Data
public class UserService {

	@Autowired
	//@Qualifier("suser")
	//@Qualifier("nuser")
	User user;
}
