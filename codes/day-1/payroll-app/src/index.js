addEmployee(new employee('anil', 2, 1000, 2000, 3000))
addEmployee(new employee('sunil', 1, 2000, 3000, 4000))
addEmployee(new employee('joydip', 3, 100, 300, 400))

sortEmployeesBySalary()
console.log('printing sorted employees')
printEmployees()

console.log('printing filtered employees')
filterEmployeesWithHigherSalary(8000).forEach(
    (e) => console.log(e.name, e.totalSalary)
)
