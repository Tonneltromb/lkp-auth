import {MemberType} from './MemberType';

export class PurchaseMember {
  name: string;
  type: MemberType;

  constructor(name: string, type: MemberType) {
    this.name = name;
    this.type = type;
  }
}
