import {Component} from '@angular/core';
import {PurchaseMember} from '../../models/PurchaseMember';
import {MemberType} from '../../models/MemberType';

@Component({
  selector: 'app-login-tab',
  templateUrl: 'login-tab.component.html'
})

export class LoginTabComponent {
  members: PurchaseMember[] = [
    new PurchaseMember('Иванов Иван Иванович', MemberType.IP),
    new PurchaseMember('ООО Северный Ветер', MemberType.JE),
    new PurchaseMember('Филиал Северный Ветер', MemberType.JEF),
    new PurchaseMember('Норд Винд Рус', MemberType.FJEF),
    new PurchaseMember('Nord Wind', MemberType.FJE)
  ];
}
