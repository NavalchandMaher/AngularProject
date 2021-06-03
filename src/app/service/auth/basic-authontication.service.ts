import { Injectable } from '@angular/core';
import { HttpHeaders, HttpRequest, HttpClient, HttpHandler } from '@angular/common/http';
//import { API_URL } from '../app.constants';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';
//import { LoginInfo } from 'src/app/login/login.component';
export const TOKEN= 'tokan';
export const AUTHENTICATED_USER= 'autheanticateUser';


@Injectable({
  providedIn: 'root'
})
export class BasicAuthonticationService {

  constructor(private http:HttpClient            
    ) { }

    exicuteAuthentaition(username:any, password:any)
  {
    
  let basicAuthHeaderString='Basic ' + window.btoa(username + ':' + password)
  let headers = new HttpHeaders({
    Authorization: basicAuthHeaderString
  })
  
  return this.http.get<AuthenticationBean>(`http://localhost:9090/demo/authentication`,{headers}).pipe(
    map(
        data =>{
        sessionStorage.setItem(AUTHENTICATED_USER,username);
          sessionStorage.setItem(TOKEN,basicAuthHeaderString);
          return data;
        }
    )
  );
  
}

getAuthenticationUser()
{
  return sessionStorage.getItem(AUTHENTICATED_USER)
}

getAuthenticationTokan():any{

  if(this.getAuthenticationUser())
    return sessionStorage.getItem(TOKEN)
}


isUserLoggedIn()
{
  let user=sessionStorage.getItem(AUTHENTICATED_USER)
  return !(user===null) 
}
logout()
{
  sessionStorage.removeItem(AUTHENTICATED_USER);
  sessionStorage.removeItem(TOKEN);
  alert("user loged out")
}
}
export class AuthenticationBean{
  
  constructor(public message:string)
  {
      alert("message is ----"+message)
  }
}

