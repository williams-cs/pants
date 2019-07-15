import { Option } from 'space-lift';
import { ErrorType } from "./ErrorType";
export declare class StringError implements ErrorType {
    _expectedStr: string;
    constructor(expectedStr: string);
    rootCause(): Option<ErrorType>;
    explanation(): string;
    toString(): string;
}