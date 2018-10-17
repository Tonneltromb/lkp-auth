import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';
import {PurchaseMember} from '../../models/PurchaseMember';

@Component({
  selector: 'app-login-tab',
  templateUrl: 'login-tab.component.html'
})

export class LoginTabComponent implements OnInit {
  user: {id: number, allowedPurchaseMembers: PurchaseMember[]};
  members: PurchaseMember[];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUserById(1).subscribe((data: User[]) => {
      this.user = data[0];
    this.members = data[0].allowedPurchaseMembers;
      console.log(data[0]);
    });
  }
}
