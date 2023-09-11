package org.coforge.bean;

/**
 * 
 * 
 * 
 * @author Training
 *   This is user bean class with constructor dependency
 */

public class User {

	
	private int userId;
	private String  userName;
	private  float userSalary;
	
	/**
	 *  init-method in beans.xml 
	 *  <br>is used to initilise the bean instance 
	 *  <br>after setter called
	 *    
	 */
	public void init() {
		this.userId=98988;
		this.userName="parvin kumar";
		this.userSalary=77000;
		System.out.println("init called");
	}
	
	public void destroy() {
		System.out.println("destroy called");
	}
	
	public User(int userId, String userName, float userSalary) {
		super();
		this.userId = userId;
		this.userName = userName;
		this.userSalary = userSalary;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", userName=" + userName + ", userSalary=" + userSalary + "]";
	}
	
	
	
}
