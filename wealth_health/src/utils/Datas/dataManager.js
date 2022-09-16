const items = JSON.parse(localStorage.getItem('employees')) || []
function addEmployee(profile) {
  items.push(profile)
  localStorage.setItem('employees', JSON.stringify(items))
}
function getEmployees() {
  return items
}

export { addEmployee, getEmployees }
