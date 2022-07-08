export default class Promotion {
    constructor(imageUrl,vendorId,code,name,effectiveDate,expiredDate,discount,applyTypeId,description) {
        this.imageUrl = imageUrl;
        this.vendorId = vendorId;
        this.name = name;
        this.code = code;
        this.effectiveDate = effectiveDate;
        this.expiredDate = expiredDate;
        this.discount = discount;
        this.description = description;
        this.applyTypeId = applyTypeId;
    }
}