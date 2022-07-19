export default class Vendor {
    constructor(Id,AvatarUrl, PhoneNumber, Address, Active, OwnerId, OpenTime, CloseTime, RatingAverage, StatusId, BusinessStatusId, VendorName, Email) {
        this.Id = Id;
        this.AvatarUrl = AvatarUrl;
        this.PhoneNumber = PhoneNumber;
        this.Address = Address;
        this.Active = Active;
        this.OwnerId = OwnerId;
        this.OpenTime = OpenTime;
        this.CloseTime = CloseTime;
        this.RatingAverage = RatingAverage;
        this.StatusId = StatusId;
        this.BusinessStatusId = BusinessStatusId;
        this.VendorName = VendorName;
        this.Email = Email;
    }
}