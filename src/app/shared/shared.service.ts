import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  private x: number = 0;

  constructor() { }

  sharedMethod() {
    console.log('%cInvoked Shared Method: %d', 'background-color: #ddd; color: #00f', this.x++);
  }

}
