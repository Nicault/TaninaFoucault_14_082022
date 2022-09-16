import States from './states'

// @ts-ignore
const items = JSON.parse(localStorage.getItem('employees')) || []
function addEmployee(profile) {
  items.push(profile)
  localStorage.setItem('employees', JSON.stringify(items))
}
function getEmployees() {
  //get abreviation state
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < States.length; j++) {
      if (items[i].state === States[j].name) {
        items[i].state = States[j].abbreviation
      }
    }
  }

  return items
}

export { addEmployee, getEmployees }
