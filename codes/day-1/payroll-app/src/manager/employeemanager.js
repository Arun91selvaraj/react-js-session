function addEmployee(emp) {
    emp.calculateSalary()
    employees.push(emp)
    return true
}

function sortEmployeesBySalary() {
    employees.sort(
        function (e1, e2) {
            return e1.totalSalary - e2.totalSalary
        }
    )
}

function filterEmployeesWithHigherSalary(salary) {
    return employees.filter(
        function (e) {
            return e.totalSalary > salary
        }
    )
}

function printEmployees() {
    employees.forEach(
        function (e) {
            console.log(e.name + ' got salary of ' + e.totalSalary)
        }
    )
}