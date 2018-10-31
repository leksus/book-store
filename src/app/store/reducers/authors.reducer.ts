import * as AuthorActions from '../actions/authors.actions';
import {Book} from "../../models/book";
import {Author} from "../../models/author";
import {State} from "../state";

export function reducer(state: State, action: AuthorActions.Actions): State {
  switch (action.type) {
    case AuthorActions.AddAuthor:
      const authors = state.authors;
      authors.push(action.payload.newAuthor);
      return {
        ...state,
        authors: authors
      };
    case AuthorActions.editAuthor:
      const authors = state.authors;
      for (let i in authors) {
        if (authors[i].id === action.payload.id) {
          authors[i] = action.payload.patch;
          break;
        }
      }
      const result: State = {
        ...state,
        authors: authors,
      };

      return result;
    case AuthorActions.removeAuthor:
      return {
        ...state,
        authors: state.authors.filter((author) => author.id !== action.payload.id)
      };
    default:
      return state;
  }
}


