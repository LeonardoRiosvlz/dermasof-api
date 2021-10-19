
export interface IPaginatedData<T> {
  total: number;
  totalPages: number;
  limit: number;
  currentPage: number;
  items: T[];
}
