import {Author} from "../Model/Author";

export class AuthorService{

  authors:Array<Author> = [];
  constructor(){
    this.authors.push(
      new Author({name:"Dan Brown"}),
      new Author({name:"Andreas Eschbach"}),
      new Author({name:"Stephen King"})
    )

  }

  getAuthors = () => this.authors;


}