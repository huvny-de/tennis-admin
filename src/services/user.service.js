import api from "./token/api";

const BASE_URL = "https://171.244.136.52:4443/api/";
class UserService {
  // Owner
  getOwnerProfile(id) {
    return api.get(BASE_URL + "User/GetOne", {
      params: {
        Id: id,
      },
    });
  }

  updateOwnerProfile(profile) {
    return api.put(BASE_URL + "User/UpdateAsync", {
      id: profile.id,
      fullName: profile.fullName,
      phoneNumber: profile.phoneNumber,
      email: profile.email,
      avatar: profile.avtUrl
    });
  }
}

export default new UserService();
