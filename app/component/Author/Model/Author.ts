export class Author{

  name:String;

  constructor(params:{name:String}){
    if (params){
      this.name = params.name;
    }
  }

}