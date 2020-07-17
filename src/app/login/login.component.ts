import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  private sendLoginRequest(emailId, password) {
    this.http.post('http://localhost:3000/api/login', {email: emailId, password: password, userType: 'USER'}).toPromise()
      .then((res: Response) => {
        // res = res.json();
        console.log(res);
      }).catch((e) => {
        console.log(e);
      })
  }
}
