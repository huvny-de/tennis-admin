export default class Vendor {
    constructor(ownerId, vendorName, avtUrl, noCourtForRent, openTime, closeTime , email , phoneNumber, address) {
        this.ownerId = ownerId;
        this.vendorName = vendorName;
        this.avtUrl = avtUrl;
        this.noCourtForRent = noCourtForRent;
        this.openTime = openTime;
        this.closeTime = closeTime;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }
}