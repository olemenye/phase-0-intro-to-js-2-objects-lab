// Write your solution in this file!
var employee = {}


function updateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    var newEmployee = employee.assign({}, ...employee, {[key]: value});
    return newEmployee;
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key){
    const NEW_OBJ =  Object.assign({}, employee);
    delete NEW_OBJ[key];
    return NEW_OBJ;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    Object.assign({}, employee);
    delete employee[key];
    return employee;
    }
    function deleteEmployee(employee) {
        const NEW_OBJ = Object.assign({}, employee);
        delete New_0BJ
        return false;
      }
      function destructivelyDeleteEmployee(employee) {
        delete employee;
        return false;
        }
  











  

