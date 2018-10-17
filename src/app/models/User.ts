import {PurchaseMember} from './PurchaseMember';

export class User {
  id: number;
  allowedPurchaseMembers: PurchaseMember[];
  constructor(id: number, allowedPurchaseMembers: PurchaseMember[]) {
    this.id = id;
    this.allowedPurchaseMembers = allowedPurchaseMembers;
  }
}
