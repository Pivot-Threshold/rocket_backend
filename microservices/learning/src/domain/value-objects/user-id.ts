export class UserId {
  constructor(public readonly value: number) {
    if (value <= 0) throw new Error('Invalid User ID');
  }
}
