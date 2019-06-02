var faker = require('faker');

function generateData() {
  var numberOfCompanies = 8;
  var employeesPerCompany = 5;
  var companies = [];
  var employees = [];
  for (var i = 0; i < numberOfCompanies; i++) {
    var companyType;
    if (i < (numberOfCompanies / 2)) {
      companyType = 'For Profit';
    } else {
      companyType = 'Non-profit';
    }
    companies.push({
      id: faker.random.uuid(),
      companyName: faker.company.companyName(),
      companyType: companyType,
      employees: []
    });
  }
  for (var j = 0; j < numberOfCompanies; j++) {
    for (i = 0; i < employeesPerCompany; i++) {
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
