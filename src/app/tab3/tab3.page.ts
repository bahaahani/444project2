import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DataService } from '../data.service'; // Correct path as necessary
// Remove the import statement for 'dynamics.js'
import { IonItem } from '@ionic/angular';
import { Inject } from '@angular/core';
import { AnimationController } from '@ionic/angular'; // Add this import statement
// At the top of your TypeScript file where you need dynamics.js
declare var dynamics: any;

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
    // Initialize component
  }

  print() {
    // Animate List1 items for print action
    this.items.forEach((item, index) => {
      dynamics.animate(item.nativeElement, {
        translateX: 100,
        opacity: 0.5
      }, {
        type: dynamics.spring,
        duration: 800,
        frequency: 200,
        delay: 100 * index // Delay each item for staggered effect
      });
    });
  }

  reversePrint() {
    // Animate List1 items for reverse print action
    const reversedItems = this.items.toArray().reverse();
    reversedItems.forEach((item, index) => {
      dynamics.animate(item.nativeElement, {
        translateX: -100,
        opacity: 0.5
      }, {
        type: dynamics.spring,
        duration: 800,
        frequency: 200,
        delay: 100 * index // Delay each item for staggered effect
      });
    });
  }
}
