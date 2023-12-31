import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DataService } from '../data.service';
//import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { AnimationController, IonItem } from '@ionic/angular';
import { Animation } from '@ionic/core';
// tab3.page.ts

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  @ViewChildren(IonItem, { read: ElementRef }) items!: QueryList<Element>; // Replace 'ElementRef' with 'Element'

  List1: any[] = []; // Placeholder for data from Firebase
  constructor(private dataService: DataService, @Inject(AnimationController) private animationCtrl: AnimationController) {}

  ngOnInit() {
    this.dataService.getPrintRequests().subscribe(data => {
      this.list1 = data;
      // Assume all data goes into list1, or split as needed
    });
  }
}
