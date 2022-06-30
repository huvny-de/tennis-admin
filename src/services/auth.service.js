import axios from "axios";
const API_URL = "http://tennis-today.softek.com.vn:5511/api/";

class AuthService {
  login(user) {
    return axios
      .post(API_URL + "User/SignIn", {
        Username: user.username,
        Password: user.password,
        autoSignIn: true,
        clientId: 2,
      })
      .then((response) => {
        if (response.data.Token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(user) {
    console.log(user)
    return axios.post(API_URL + "User/Register", {
      username: user.username,
      email: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword,
      fullName: user.fullName,
      phoneNumber: user.phoneNumber,
      clientId: 2,
    });
  }
}

export default new AuthService();
