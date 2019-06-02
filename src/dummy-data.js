var faker = require('faker');

function generateData() {
  var companies = [];
  var employees = [];
  for (var i = 0; i < 3; i++) {
    companies.push({
      id: faker.random.uuid(),
      companyName: faker.company.companyName(),
      employees: []
    });
  }
  for (var j = 0; j < 3; j++) {
    for (var i = 0; i < 10; i++) {
      var id = faker.random.uuid();
      employees.push({
        id,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email()
      });
      companies[j].employees.push(id);
    }
  }
  return {
    "companies": companies,
    "employees": employees
  };
}

module.exports = generateData;
