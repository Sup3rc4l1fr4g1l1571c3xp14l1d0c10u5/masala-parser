import Parser from "./parser";
import {types} from './parser';


export default class ArrayParser extends Parser{

    constructor(parse){
        super(parse);
        this.type= types.ARRAY;
    }



}