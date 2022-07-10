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
      applyTypeId: 1,
    });
  }
}

export default new PromotionService();
