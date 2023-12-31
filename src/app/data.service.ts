import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private firestore: AngularFirestore) { }

  // Fetch all print requests
  getPrintRequests(): Observable<any[]> {
    return this.firestore.collection('printRequests').valueChanges({ idField: 'id' });
  }

  // Add a print request
  addPrintRequest(printRequest: any): Promise<any> {
    return this.firestore.collection('printRequests').add(printRequest);
  }

  // Delete a print request
  deletePrintRequest(id: string): Promise<void> {
    return this.firestore.collection('printRequests').doc(id).delete();
  }

  // Update a print request
  updatePrintRequest(id: string, printRequest: any): Promise<void> {
    return this.firestore.collection('printRequests').doc(id).update(printRequest);
  }
}
