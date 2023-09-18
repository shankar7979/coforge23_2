package com.example.model;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
public class Bus {
	@Value("10001")
	private int busId;

	@Value("dtc bus")
	private String busName;
	
	@Value("noida to indiagate")
	private String busRoute;
	
	@Value("50")
	private float busFare;
}
