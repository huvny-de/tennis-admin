import api from "./token/api";

const BASE_URL = "https://coreapi.softek.com.vn/api/";

class PromotionService {
  createPromotion(voucher) {
    return api.post(BASE_URL + "Voucher", {
      vendorId: voucher.vendorId,
      code: voucher.code,
      effectiveDate: voucher.effectiveDate,
      expiredDate: voucher.expiredDate,
      name: voucher.name,
      description: voucher.description,
      imageUrl: voucher.imageUrl,
      active: true,
      discountPrice: voucher.discountPrice,
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

  updatePromotion(update_promotion) {
    return api.put(BASE_URL + "Voucher", {
      id: update_promotion.Id,
      vendorId: update_promotion.VendorId,
      code: update_promotion.Code,
      effectiveDate: new Date(update_promotion.EffectiveDate).toISOString(),
      expiredDate: new Date(update_promotion.ExpiredDate).toISOString(),
      name: update_promotion.Name,
      description: update_promotion.Description,
      imageUrl: update_promotion.ImageUrl,
      insertedBy: update_promotion.UserId,
      updatedBy: update_promotion.UserId,
      applyTypeId: 1,
      active: true,
      discountPrice: update_promotion.DiscountPrice
    });
  }

  deletePromotion(id) {
    return api.delete(BASE_URL + `Voucher/${id}`);
  }
}

export default new PromotionService();
