import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http';
import { BasicAuthonticationService } from '../auth/basic-authontication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterService implements HttpInterceptor {

  constructor(
    private basicAuthonticationService:BasicAuthonticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler)
  {
    console.log("ok done intercepter")
    let basicHeaderString =this.basicAuthonticationService.getAuthenticationTokan();
    let username=this.basicAuthonticationService.getAuthenticationUser();
   console.log("aaaaaaa------"+basicHeaderString);
   console.log("bbbbbbb------"+username);
   

    if(basicHeaderString && username)
    {
      console.log("intercepter http");
      console.log("intercepter http header is ---------"+basicHeaderString);
      
    request=request.clone({
      setHeaders:{
        Authorization:basicHeaderString
      }
    })
  }
    return next.handle(request);
  }
}
