export interface ListResult<T> {
  list: T[];
  total: number;
  perPage: number;
  page: number;
  count: number;
}

export interface Result<T> {
  data: ListResult<T> | any;
  code: string | number;
  msg: string;
  subMsg?: string;
  subCode?: string;
  sign?: string;
}
