import {Component} from '@angular/core';
import {MemberType} from '../../models/MemberType';

@Component({
  selector: 'app-registration-page',
  templateUrl: 'registration-page.component.html'
})

export class RegistrationPageComponent {
  members: string[] = [MemberType.IP, MemberType.JE, MemberType.JEF, MemberType.FJE, MemberType.FJEF];
}
