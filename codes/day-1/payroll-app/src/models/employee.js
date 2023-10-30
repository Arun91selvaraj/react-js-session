function employee(name, id, basic, da, hra) {
    this.name = name
    this.id = id
    this.basicPayment = basic
    this.daPayment = da
    this.hraPayment = hra
    this.totalSalary = 0
    this.calculateSalary = function () {
        this.totalSalary = this.basicPayment + this.daPayment + this.hraPayment
    }
}