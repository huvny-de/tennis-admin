export default class User {
    constructor(username, email, password,confirmPassword,fullName,phoneNumber,clientId,Vendor) {
      this.username = username;
      this.email = email;
      this.password = password;
      this.confirmPassword = confirmPassword;
      this.fullName = fullName;
      this.phoneNumber = phoneNumber;
      this.clientId = clientId;
      this.Vendor = Vendor;
    }
  }