import axios from "axios";
const API_URL = "http://171.244.136.52:5511/api/";

class AuthService {
  login(user) {
    return axios
      .post(API_URL + "user/signIn", {
        Username: user.username,
        Password: user.password,
        autoSignIn: true,
      })
      .then((response) => {
        if (response.data.Is200) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(user){
    return axios.post(API_URL + "User/SignUp" , {
        UserName : user.username,
        Password : user.password,
        phoneNumber : user.phoneNumber,
        Email : user.email,
        FirstName : user.firstName,
        LastName : user.lastName,
        FullName : user.lastName + user.firstName,
        Dob : user.dob
    });
  }
  
}

export default new AuthService();
