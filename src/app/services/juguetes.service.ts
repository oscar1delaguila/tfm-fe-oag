import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juguete } from '../models/juguete.interface';
import { Juguetes } from '../models/juguetes.interface';

@Injectable({
  providedIn: 'root'
})
export class JuguetesService {

  constructor(private http: HttpClient) { }


  getAllJuguetes():Observable<Juguetes> {
    
    return this.http.get<Juguetes>('http://ec2-52-47-148-224.eu-west-3.compute.amazonaws.com/juguetes');
    //return this.http.get<Juguetes>('/juguetes');
  }

  getJugueteById(identifier:string):Observable<Juguete> {
    //return this.http.get<Juguete>('/juguete/' + identifier);
    return this.http.get<Juguete>('http://ec2-52-47-148-224.eu-west-3.compute.amazonaws.com/juguete/' + identifier);
    

  }


}
