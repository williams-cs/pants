import { ErrorType } from "./ErrorType";
import { Option, Some, None } from "space-lift";
const jslevenshtein = require('js-levenshtein');

export class ItemError implements ErrorType {

    rootCause() : Option<ErrorType> {
        return None;
    }

    explanation() {
        return "";
    }

    minEdit(input: string, expectedStr: string = "") : number {
        let val: number = jslevenshtein (input, expectedStr);
        return val;
    }

    expectedStr() : string {
        return "" ;
    }

    toString() : string {
        return "ItemError"; 
    }
}