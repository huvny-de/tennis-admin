export default class Vendor {
    constructor(OwnerId, VendorName, AvatarUrl, noCourtForRent, OpenTime, CloseTime , Email , PhoneNumber, Address,StatusId,businessStatusId,RatingAverage) {
        this.OwnerId = OwnerId;
        this.VendorName = VendorName;
        this.AvatarUrl = AvatarUrl;
        this.noCourtForRent = noCourtForRent;
        this.OpenTime = OpenTime;
        this.CloseTime = CloseTime;
        this.Email = Email;
        this.PhoneNumber = PhoneNumber;
        this.Address = Address;
        this.StatusId = StatusId;
        this.businessStatusId = businessStatusId;
        this.RatingAverage = RatingAverage;
    }
}