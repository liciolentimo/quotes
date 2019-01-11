export class Quotes {
    public showDetails:boolean;
    constructor(public personName:string,public authorName:string,public quoteName:string,public dateCreated:Date){
        this.showDetails=false;
    }
}
