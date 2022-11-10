import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CONNECTION } from '../global';

@Injectable({
  providedIn: 'root'
})
export class RestUserService {

  public uri: string;
  public token;
  public userId;
  public user;
  public status;
  public httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  public httpOptionsAuth = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
  }
  
  private extractData(res:Response){
    let body = res;
    return body || [] || {};
  }

  public getToken(){
    let token = localStorage.getItem("token");
    if(token != null || token != undefined){
      let tokenR = token.replace(/['"]+/g,'');
      this.token = "bearer "+tokenR;
    }else{
      this.token = null;
    }

    return this.token;
  }

  public getUser(){
    let user = JSON.parse(localStorage.getItem("user"));
    return user;
  }

  constructor(private http:HttpClient) { 
    this.uri = CONNECTION.URI;
  }


  login(user){

    let params = JSON.stringify(user);
    return this.http.post(this.uri+'login', params,this.httpOptions)
    .pipe(map(this.extractData))

  }


  register(user){

    let params = JSON.stringify(user);
    return this.http.post(this.uri+'register', params,this.httpOptions)
    .pipe(map(this.extractData))

  }

  updateUser(user){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    })
    
    let params = JSON.stringify(user);
    return this.http.post(this.uri+'admin/updateUser', params,{headers:headers})
    .pipe(map(this.extractData))

  }



}
