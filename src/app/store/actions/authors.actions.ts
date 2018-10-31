import {Action} from "@ngrx/store";
import {Author} from "../../models/author";

export const addAuthor = '[author] add';
export const editAuthor = '[author] edit';
export const removeAuthor = '[author] remove';


export class AddAuthor implements Action {
  readonly type: string = addAuthor;

  constructor(public payload: { newAuthor: Author }) { }
}

export class EditAuthor implements Action {
  readonly type: string = editAuthor;

  constructor(public payload: { id: number, patch: Author }) { }
}

export class RemoveAuthor implements Action {
  readonly type: string = removeAuthor;

  constructor(public payload: { id: number }) { }
}

export type Actions = AddAuthor | EditAuthor | RemoveAuthor;
