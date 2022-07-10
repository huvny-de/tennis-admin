import api from "./token/api";

const BASE_URL = "https://coreapi.softek.com.vn/api/";

class CourtService {

  createCourt(court) {
    return api.post(BASE_URL + "Court", {
      name: court.name,
      vendorId: court.vendorId,
      typeId: court.typeId,
      courtSizeId: court.courtSizeId,
      ratingAverage: 0,
      imageUrl: court.imageUrl,
    });
  }

  getAllCourtOfVendor(param) {
    return api.get(BASE_URL + "Court/PagedList" , {
      params : {
        VendorId : param.vendorId,
        PageSize : param.pageSize,
        query : param.query,
        CurrentPage : param.currentPage
      }
    })
  }
}

export default new CourtService();
