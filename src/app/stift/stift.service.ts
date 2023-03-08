import { Injectable } from '@angular/core';
import { Stift } from './stift';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class StiftService {
    constructor(private http: HttpClient){

    }
    ditffproberen(){
        alert("in service proberen");
    }
    naardeBackend():Observable<Stift>{
        return this.http.get<Stift>("https://catfact.ninja/fact");
    }

}