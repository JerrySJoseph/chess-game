export default class MoveNotAllowedError extends Error{
    constructor(message:string){
        super(message);
        this.name='Move Not Allowed'
    }
}