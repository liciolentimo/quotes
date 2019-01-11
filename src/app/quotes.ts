export class Quotes {
    public showDetails:boolean;
    constructor(public name:string,public author:string,public quote:string,public dateCreated:Date){
        this.showDetails=false;
    }
}
