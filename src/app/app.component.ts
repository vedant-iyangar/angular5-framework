import { Component } from '@angular/core';
import {VarService} from './var.service';
import {SharedService} from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post: any;
  constructor(private varService: VarService, private sharedService: SharedService) {
    this.sharedService.sharedMethod();
    this.varService.getVariableValue().then(
      post => this.post = post
    );
  }
}
