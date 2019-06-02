export class Company {
  id: string;
  companyName: string;
  companyType: 'For Profit' | 'Non-profit';
  buzz: string;
  employees: string[];
  address: {
    street: string,
    city: string,
    state: string,
    zip: string
  };
  phone: string;
}
