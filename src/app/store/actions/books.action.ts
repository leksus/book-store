import {Action} from "@ngrx/store";
import {Book} from "../../models/book";

export const addBook = '[book] add';
export const editBook = '[book] edit';
export const removeBook = '[book] remove';


export class AddBook implements Action {
  readonly type: string = addBook;

  constructor(public payload: { newBook: Book }) { }
}

export class EditBook implements Action {
  readonly type: string = editBook;

  constructor(public payload: { id: number, patch: Book }) { }
}

export class RemoveBook implements Action {
  readonly type: string = removeBook;

  constructor(public payload: { id: number }) { }
}

export type Actions = AddBook | EditBook | RemoveBook;
