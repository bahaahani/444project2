import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DataService } from '../data.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  printRequests: any[] = [];
  filteredRequests: any[] = [];
  isSorted: boolean = false;

  constructor(private dataService: DataService, private alertController: AlertController) {}

  ngOnInit() {
    this.fetchPrintRequests();
  }

  fetchPrintRequests() {
    this.dataService.getPrintRequests().subscribe(requests => {
      this.printRequests = requests;
      this.filteredRequests = [...this.printRequests];
    });
  }

  async deleteRequest(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: 'Do you want to delete this print request?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Okay',
          handler: () => {
            this.dataService.deletePrintRequest(id).then(() => {
              this.fetchPrintRequests(); 
            });
          },
        },
      ],
    });

    await alert.present();
  }

  sortToggle() {
    this.isSorted = !this.isSorted;
    this.filteredRequests = this.isSorted
      ? [...this.printRequests].sort((a, b) => a.copies - b.copies)
      : [...this.printRequests];
  }

  applyFilter(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    if (!searchTerm) {
      this.filteredRequests = [...this.printRequests];
    } else {
      this.filteredRequests = this.printRequests.filter(request =>
        request.paperSize.toLowerCase().includes(searchTerm)
      );
    }
  }
}
