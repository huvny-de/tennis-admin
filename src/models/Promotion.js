export default class Error {
    constructor(imgUrl,name,code,startDate,endDate,discount,description) {
        this.imgUrl = imgUrl;
        this.name = name;
        this.code = code;
        this.startDate = startDate;
        this.endDate = endDate;
        this.discount = discount;
        this.description = description;
    }
}