import { Input } from "./input";
import { Purpose } from "./purpose";

export class Form<T>{
    purpose: Purpose;
    inputs: Input[];
    obj: T;
    
    constructor(obj: T, purpose: Purpose) {
        this.obj = obj;
        this.purpose = purpose;
        this.inputs = [];

        let index = 0;
        for (let key in Object.keys(obj)) {
            index++;
            let input = new Input(key, index, this.purpose)
            this.inputs.push(input);
        }
    }
}