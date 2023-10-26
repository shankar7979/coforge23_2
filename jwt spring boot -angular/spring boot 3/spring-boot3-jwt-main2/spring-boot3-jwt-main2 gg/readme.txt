postman

user profile

post method  body json 

http://localhost:8080/auth/addNewUser
{
  "name":"amit kumar",
   "email":"amit@ymail.com",
   "password":"1234",
   "roles":"ROLE_USER"
}

post method   body json 
http://localhost:8080/auth/generateToken
{
  "username":"amit kumar",
   "password":"1234"
}

it will generate token

copy token 

get method 
Authorization--> Type  Bearer Token --> in token(rhs) -- paste token value

http://localhost:8080/auth/user/userProfile

output 
Welcome to User Profile

==========================================================

admin profile

post method  body json 

http://localhost:8080/auth/addNewUser
{
  "name":"suresh kumar",
   "email":"suresh@ymail.com",
   "password":"1234",
   "roles":"ROLE_ADMIN"
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
Authorization--> Type  Bearer Token --> in token(rhs) -- paste token value

http://localhost:8080/auth/admin/adminProfile

output 
Welcome to Admin Profile


admin profile


