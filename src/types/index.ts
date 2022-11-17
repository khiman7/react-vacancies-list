export interface IJob {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  title: string;
  salary: string;
  benefits: string[];
  location: {
    lat: number;
    long: number;
  };
  pictures: string[];
  createdAt: string;
  updatedAt: string;
  description: string;
  employment_type: string[];
}
