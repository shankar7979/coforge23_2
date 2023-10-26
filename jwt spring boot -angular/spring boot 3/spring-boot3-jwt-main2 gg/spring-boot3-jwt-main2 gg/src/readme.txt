postman 
post method  body json 

http://localhost:8080/auth/addNewUser

{
  "name":"suresh kumar",
   "email":"suresh@ymail.com",
   "password":"1234",
   "roles":"ROLE_USER"
}


post method   body json 
http://localhost:8080/auth/generateToken

{
  "username":"suresh kumar",
   "password":"1234"
}
it will generate token

copy token 

get method 

authorization -->Type--> Bearer Token, rhs Token paste

http://localhost:8080/auth/user/userProfile

hit above
Welcome to User Profile