import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DataService } from '../data.service'; // Adjust this import as necessary
import { IonItem, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  @ViewChildren(IonItem) items!: QueryList<IonItem>;

  List1: any[] = []; // Placeholder for data from Firebase
  List2: any[] = []; // Placeholder for data from Firebase

  constructor(
    private dataService: DataService, 
    private animationCtrl: AnimationController
  ) {}

  ngOnInit() {
    // Fetch data from Firebase
    this.dataService.getPrintRequests().subscribe(data => {
      this.List1 = data; // Assumes data is an array of items
    });
  }

  print() {
    // Animate List1 items for print action
    this.items.forEach((item, index) => {
      const animation = this.animationCtrl.create()
        .addElement(item.el)
        .duration(800)
        .delay(100 * index)
        .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
        .fromTo('opacity', '1', '0.5');
      animation.play();
    });
  }

  reversePrint() {
    // Animate List1 items for reverse print action
    const reversedItems = this.items.toArray().reverse();
    reversedItems.forEach((item, index) => {
      const animation = this.animationCtrl.create()
        .addElement(item.el)
        .duration(800)
        .delay(100 * index)
        .fromTo('transform', 'translateX(0px)', 'translateX(-100px)')
        .fromTo('opacity', '1', '0.5');
      animation.play();
    });
  }
}
