export interface Paginated<T> {
  items: T[]
  totalItems: number
  currentPage: number
  totalPages: number
  pageSize: number
}
