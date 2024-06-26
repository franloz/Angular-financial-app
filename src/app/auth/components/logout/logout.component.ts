import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {


  constructor(
    private userService: UserService,
    private router: Router,
  ) {}


  public logOut() {

    this.userService.logOut()
      .then(() => {
        this.router.navigate(['auth/login']);
      })
      .catch((error) => console.log(error));//poner mensaje de error cuando acople el logout componente
  }

}
