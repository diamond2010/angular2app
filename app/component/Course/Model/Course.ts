import {Author} from "../../Author/Model/Author";

export class Course{

  name:String;
  description:String;
  author:Author;

  constructor(params:{name:String, description?:String,author?:Author}){
    if (params){
      this.name = params.name;
      this.description = params.description;
      this.author = params.author;
    }
  }

}