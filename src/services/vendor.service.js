import api from "./token/api";

const BASE_URL = "https://coreapi.softek.com.vn/api/";

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
      avatarUrl: vendor.AvatarUrl,
      phoneNumber: vendor.PhoneNumber,
      address: vendor.Address,
      active: true,
      insertedBy: vendor.OwnerId,
      updatedBy: vendor.OwnerId,
      ownerId: vendor.OwnerId,
      openTime: vendor.OpenTime,
      closeTime: vendor.CloseTime,
      ratingAverage: 0,
      statusId: 1,
      businessStatusId: 1,
      vendorName: vendor.VendorName,
    });
  }

  updateVendorProfile(vendor) {
    return api.put(BASE_URL + "Vendor/UpdateAsync", {
      id: vendor.VendorId,
      avatarUrl: vendor.AvatarUrl,
      phoneNumber: vendor.PhoneNumber,
      address: vendor.Address,
      active: true,
      insertedBy: vendor.OwnerId,
      updatedBy: vendor.OwnerId,
      ownerId: vendor.OwnerId,
      openTime: vendor.OpenTime,
      closeTime: vendor.CloseTime,
      ratingAverage: vendor.RatingAverage,
      statusId: vendor.StatusId,
      businessStatusId: vendor.BusinessStatusId,
      vendorName: vendor.VendorName,
      email: vendor.Email,
    });
  }

  sendRequestToApprove(vendor) {
    return api.post(BASE_URL + "VendorApprovement/SendRequest", {
      vendorId: vendor.Id,
    });
  }

  loadVendorRequestApprove(param) {
    return api.get(BASE_URL + "VendorApprovement/PagedList", {
      PageSize: param.pageSize,
      queryString: param.queryString,
      CurrentPage: param.currentPage,
    });
  }

  approveVendorRequest(vendorId) {
    return api.post(BASE_URL + "VendorApprovement/Approve", {
      vendorId : vendorId
    });
  }
  
  rejectVendorRequest(vendorId , reasonText) {
    return api.post((BASE_URL + "VendorApprovement/Reject", {
      vendorId : vendorId,
      reason : reasonText
    }));
  }


}

export default new VendorService();
