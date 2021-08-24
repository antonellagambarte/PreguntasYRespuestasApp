import{ HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{ environment } from '../../environments/environment';
import { Usuario } from '../models/usuario';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
myAppUrl: string;
myApiUrl:string;

  constructor(private http: HttpClient) {
      this.myAppUrl=environment.endpoint;
      this.myApiUrl='/Api/Login';
   }

   login(usuario: Usuario): Observable<any>{
     return this.http.post(this.myAppUrl + this.myApiUrl, usuario);
   }

   setLocalStorage(data):void{
     localStorage.setItem('token', data);
   }

  //  getNombreUsuario():string{
  //    return localStorage.getItem('nombreUsuario');
  //  }

  getTokenDecoded():any{
    const helper = new JwtHelperService();
 
    const decodedToken = helper.decodeToken(localStorage.getItem('token'));
    // const expirationDate = helper.getTokenExpirationDate(myRawToken);
    // const isExpired = helper.isTokenExpired(myRawToken);
    return decodedToken;
  }

   removeLocalStorage():void{
     localStorage.removeItem('token');
   }
}
