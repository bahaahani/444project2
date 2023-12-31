import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { DataService } from '../data.service'; 
import { IonItem, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  @ViewChildren(IonItem) items!: QueryList<IonItem>;

  List1: any[] = []; 
  List2: any[] = []; 

  constructor(
    private dataService: DataService, 
    private animationCtrl: AnimationController
  ) {}

  ngOnInit() {

    this.dataService.getPrintRequests().subscribe(data => {
      this.List1 = data; 
    });
  }

  print() {
    
    this.items.forEach((item, index) => {
      const animation = this.animationCtrl.create()
       // .addElement(item.el)
        .duration(800)
        .delay(100 * index)
        .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
        .fromTo('opacity', '1', '0.5');
      animation.play();
    });
  }

  reversePrint() {
  
    const reversedItems = this.items.toArray().reverse();
    reversedItems.forEach((item, index) => {
      const animation = this.animationCtrl.create()
       // .addElement(item.el)
        .duration(800)
        .delay(100 * index)
        .fromTo('transform', 'translateX(0px)', 'translateX(-100px)')
        .fromTo('opacity', '1', '0.5');
      animation.play();
    });
  }
}
