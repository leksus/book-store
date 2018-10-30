import { Author } from './author';

export interface Book {
  title: string;
  authors: Array<Author>;
  pagesCount: number;
  publisher: string;
  year: number;
  date: Date;
  isbn: string;
  image: string;
}