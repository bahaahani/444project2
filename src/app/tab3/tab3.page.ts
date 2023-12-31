import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DataService } from '../data.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
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

  @ViewChildren(IonItem) items: QueryList<IonItem>;

  constructor(private dataService: DataService, private animationCtrl: AnimationController) {}

  ngOnInit() {
    this.dataService.getPrintRequests().subscribe(data => {
      this.list1 = data;
      // Initialize list2 if needed or do additional processing
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  print() {
    this.animateItems('forward');
  }

  reversePrint() {
    this.animateItems('reverse');
  }

  animateItems(direction: 'forward' | 'reverse') {
    const itemsArray = this.items.toArray();
    if (direction === 'reverse') itemsArray.reverse();

    itemsArray.forEach((item, index) => {
      const animation = this.animationCtrl
        .create()
        .addElement(item.el)
        .duration(300)
        .delay(index * 100)
        .fromTo('opacity', '1', '0.5')
        .fromTo('transform', 'translateX(0)', 'translateX(100px)');

      animation.play();
    });
  }
}
