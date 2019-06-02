import { Person } from '../../people/models/Person';

export class Company {
  id: string;
  companyName: string;
  companyType: 'For Profit' | 'Non-profit';
  buzz: string;
  employees: Person[];
  address: {
    street: string,
    city: string,
    state: string,
    zip: string
  };
  phone: string;
}
