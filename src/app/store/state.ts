import {Book} from "../models/book";
import {Author} from "../models/author";

export interface State {
  selected: number
  books: Book[];
  authors: Author[];
}
