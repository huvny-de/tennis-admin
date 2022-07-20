import api from "./token/api";

const BASE_URL = "https://coreapi.softek.com.vn/api/";

class BookingService {
 

  getPagedListBookingRequest(param) {
    return api.get(BASE_URL + "Booking/PagedListByVendor", {
      params: {
        PageSize: param.pageSize,
        query: param.query,
        CurrentPage: param.currentPage,
        vendorId : param.vendorId
      },
    });
  }

 

  
}

export default new BookingService();
