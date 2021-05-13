import {Geo} from "./users.address.geo.interface"

export interface Address{
    street?:string;
    suite?:string;
    city?:string;
    zip?:string;
    geo?:Geo;
}