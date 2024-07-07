import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { ApikeyService } from '../../services/apikey.service';

@Component({
  selector: 'auth-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {


  constructor(
    private userService: UserService,
    private router: Router,
    private apiKey: ApikeyService,
  ) {}


  public logOut() {
    this.userService.logOut()
      .then(() => {
        this.apiKey.removeApiKey();
        this.router.navigate(['auth/login']);
      })
      .catch((error) => console.log(error));//poner mensaje de error cuando acople el logout componente
  }

}
