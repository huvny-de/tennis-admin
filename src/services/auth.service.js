import axios from "axios";
const API_URL = "https://eqc-demo.softek.com.vn/api/";

class AuthService {
  login(user) {
    return axios
      .post(API_URL + "user/signIn?tenant=nwl", {
        AutoSignIn: true,
        ClientId: null,
        CompanyName: "nwl",
        Username: user.username,
        Password: user.password,
        RecoveryToken: "",
      })
      .then((response) => {
        if (response.data.AccessToken) {
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
