import { Component, OnInit } from '@angular/core';
import {VarService} from '../../var.service';
import {SharedService} from "../../shared/shared.service";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(private varService: VarService, private sharedService: SharedService) {
    this.sharedService.sharedMethod();
  }

  ngOnInit() {
  }

}
