import {Book} from "../models/book";
import {Author} from "../models/author";

export interface State {
  books: Book[];
  authors: Author[];
}
