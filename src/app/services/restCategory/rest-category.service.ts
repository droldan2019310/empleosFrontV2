import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CONNECTION } from '../global';

@Injectable({
  providedIn: 'root'
})
export class RestCategoryService {

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


  getCategories(){

    return this.http.get(this.uri+'getCategories', this.httpOptions)
    .pipe(map(this.extractData))

  }


  saveCategory(category){

    let params = JSON.stringify(category);
    return this.http.post(this.uri+'saveCategory', params,this.httpOptions)
    .pipe(map(this.extractData))

  }

  updateCategory(category){

    let params = JSON.stringify(category);
    return this.http.post(this.uri+'updateCategory/'+category.idcategory, params,this.httpOptions)
    .pipe(map(this.extractData))

  }
}
