import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  printForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder, 
    private dataService: DataService,
    private toastController: ToastController
  ) {
    this.createForm();
  }

  createForm() {
    this.printForm = this.fb.group({
      copies: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
      paperSize: ['', Validators.required],
      inkQuality: ['', Validators.required],
      printDate: [false], 
      printBorders: [false] 
    });
  }

  async submitForm() {
    if (this.printForm.valid) {
      try {
        await this.dataService.addPrintRequest(this.printForm.value);
        await this.presentToast('Print request submitted successfully');
        this.printForm.reset();
      } catch (error) {
        await this.presentToast('Error submitting print request');
      }
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
