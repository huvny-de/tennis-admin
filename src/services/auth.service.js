import axios from "axios";
const API_URL = "https://171.244.136.52:4443/api/";

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
