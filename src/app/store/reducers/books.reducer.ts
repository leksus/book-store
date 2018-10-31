import * as BookActions from '../actions/books.action';
import {Book} from "../../models/book";
import {Author} from "../../models/author";
import {State} from "../state";

export function reducer(state: State, action: BookActions.Actions): State {
  switch (action.type) {
    case BookActions.addBook:
      return {
        ...state,
        books: state.books.push(action.payload.newBook)
      };
    case BookActions.editBook:
      return {
        ...state,
        books: action.payload.patch
      };
    default:
      return state;
  }
}


