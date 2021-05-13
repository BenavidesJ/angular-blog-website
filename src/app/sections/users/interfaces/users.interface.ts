import {Address} from "./users.address.interface";
import {Company} from "./users.company.interface";

export interface User{
    id?:number;
    name?:string;
    email?:string;
    phone?:string;
    website?:string;
    address?:Address;
    company?: Company;
}