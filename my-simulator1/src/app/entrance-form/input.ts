import { Purpose } from "./purpose";

export class Input {
    type: string;
    name: string;
    hidden: boolean;
    placeholder: string;
    dicecreption: string;

    constructor(key: string, index: number, purpose: Purpose) {
        this.name = key + index;
        switch (key) {
            case 'purpose.register':
                this.placeholder = "enter "
                break;
        
            default:
                break;
        }
        
        
        switch (key) {
            case 'email':
            case 'password':
                this.type = key;
                break;
            default:
                this.type = 'text'
                break;
        }
    }
}
