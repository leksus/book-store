import { Author } from './author';

export interface Book {
  id: number;
  title: string;
  authors: Array<Author>;
  pagesCount: number;
  publisher: string;
  year: number;
  date: Date;
  isbn: string;
  image: string;
}