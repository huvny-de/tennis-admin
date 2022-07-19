import api from "./token/api";

const BASE_URL = "https://coreapi.softek.com.vn/api/";

class SlotService {
  createSlotForCourtTypeId(slot_detail) {
    let slot_arr = [];

    slot_detail.forEach((slot) => {
      slot_arr.push({
        no: slot.no,
        startTime: slot.startTime,
        endTime: slot.endTime,
        price: slot.price,
        vendorId: slot.vendorId,
        active: true,
        applyTypeId: slot.applyTypeId,
        statusId: 1,
      });
    });

    return api.put(BASE_URL + "Slot/BulkUpdate", slot_arr);
  }

  createRatingForSlotByDate(rate_detail) {
    return api.put(BASE_URL + "CalendarConfig/BulkUpdate", rate_detail);
  }
}

export default new SlotService();
