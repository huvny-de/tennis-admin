import api from "./token/api";

const BASE_URL = "https://coreapi.softek.com.vn/api/";

class PromotionService {
  createPromotion(voucher) {
    return api.post(BASE_URL + "Voucher", {
      vendorId: voucher.vendorId,
      code: voucher.code,
      effectiveDate: voucher.effectiveDate,
      expiredDate : voucher.expiredDate,
      name: voucher.name,
      description: voucher.description,
      imageUrl: voucher.imageUrl,
      active: true,
      applyTypeId: 1,
    });
  }

  getPromotionOfVendor(param) {
    return api.get(BASE_URL + "Voucher/PagedList", {
      params: {
        VendorId: param.vendorId,
        PageSize: param.pageSize,
        query: param.query,
        CurrentPage: param.currentPage,
      },
    });
  }
}

export default new PromotionService();
