export interface IList {
  type: string;
  _id: string;
  amount: number;
  name: {
    first: string;
    last: string;
  };
  company: string;
  email: string;
  phone: string;
  address: string;
}

export interface IData {
  total: number;
  data: IList[];
}
