import {Component} from "angular2/core"
import {AuthorService} from "../Service/Author_Service";
import {Author} from "../Model/Author";

@Component({
  selector:'authorComponent',
  template:`
        <div>
    <h2>AUTHORS</h2>
    
    <ul *ngFor="#author of authors">
        <li>{{author.name}}</li>
    </ul>
</div>
    `,
  providers:[AuthorService]
})

export class AuthorComponent{

  authors:Array<Author> = [];


  constructor(private service:AuthorService){

    this.authors = this.getAuthors();
  }

  getAuthors = ():Array<Author> => this.service.getAuthors();

}