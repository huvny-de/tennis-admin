export default class Promotion {
    constructor(Id,VendorId,Code,EffectiveDate,ExpiredDate,Name,Description,ImageUrl,InsertedBy,ApplyTypeId,DiscountPrice) {
        this.Id = Id;
        this.VendorId = VendorId;
        this.Name = Name;
        this.Code = Code;
        this.EffectiveDate = EffectiveDate;
        this.ExpiredDate = ExpiredDate;
        this.Description = Description;
        this.ImageUrl = ImageUrl;
        this.InsertedBy = InsertedBy;
        this.ApplyTypeId = ApplyTypeId;
        this.DiscountPrice = DiscountPrice;
        
    }
}