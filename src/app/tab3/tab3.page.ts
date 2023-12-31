import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DataService } from '../data.service';

import { AnimationController, IonItem } from '@ionic/angular';
import { Animation } from '@ionic/core';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  list1: any[] = [];
  list2: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPrintRequests().subscribe(data => {
      this.list1 = data;
    
    });
  }
}
