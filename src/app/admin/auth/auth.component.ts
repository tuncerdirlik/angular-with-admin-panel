import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  errorMessage: string;
  username: string;
  password: string;

  constructor(public router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    if (form.valid) {
      // if (this.username==="admin" && this.password ===  "123") {
      //   this.router.navigateByUrl("/admin/main");
      // }
      // else {
      //   this.errorMessage = "Hatalı giriş bilgileri";
      // }

      this.authService.authenticate(this.username, this.password).subscribe(response => {
        
        if(response) {
          this.router.navigateByUrl("/admin/main");
        }
        else {
          this.errorMessage = "Hatalı giriş bilgileri";
        }
      })

    }
    else {
      this.errorMessage = "Bilgileri eksiksiz giriniz";
    }
  }

}
