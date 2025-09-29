import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/auth/auth';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  currentUserDetails :any;

  authService = inject(AuthService);

  

  getUserDeatils(){
    this.authService.getUser().subscribe(res=>{
      this.currentUserDetails = res;
      console.log(this.currentUserDetails);
    })
  }

}
