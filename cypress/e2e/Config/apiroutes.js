module.exports = {

    baseUrl: "https://reqres.in/",
    // GET requests
    list_users: "api/users?page=2",
    single_user: "api/users/2",
    user_not_found: "api/users/23",
    list_resource: "api/unknown",
    single_resource: "api/unknown/2",
    single_resource_not_found: "api/unknown/23",
  
    // POST
    create: "api/users",
  
    // PUT/PATCH
    update: "api/users/2",
  
    // DELETE
    deleteUser: "api/users/2",
  
    // Additional POST
    register_successful: "api/register",
    login_user: "api/login",
  
    // Delay
    delay_user: "api/users?delay=3"
  };
  