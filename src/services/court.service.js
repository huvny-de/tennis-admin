import api from "./token/api";

const BASE_URL = "https://171.244.136.52:4443/api/";

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
}

export default new CourtService();
