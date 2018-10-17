import {MemberType} from './MemberType';

export class PurchaseMember {
  name: string;
  memberType: string;

  constructor(name: string, memberType: string) {
    this.name = name;
    this.memberType = memberType;
  }
}
