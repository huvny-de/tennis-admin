import api from "./token/api";

const BASE_URL = "https://171.244.136.52:4443/api/";

class VendorService {
    
  getVendorProfile(id) {
    return api.get(BASE_URL + "Vendor/GetOne", {
      params: {
        Id: id,
      },
    });
  }

  createVendorProfile(vendor) {
    return api.post(BASE_URL + "Vendor", {
      avatarUrl: vendor.avtUrl,
      phoneNumber: vendor.phoneNumber,
      address: vendor.address,
      active: true,
      insertedBy: vendor.ownerId,
      updatedBy: vendor.ownerId,
      ownerId: vendor.ownerId,
      openTime: vendor.openTime,
      closeTime: vendor.closeTime,
      ratingAverage: 0,
      statusId: 1,
      businessStatusId: 0,
      vendorName: vendor.vendorName,
    });
  }
}

export default new VendorService();
