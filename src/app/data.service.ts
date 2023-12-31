import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private firestore: AngularFirestore) { }


  getPrintRequests(): Observable<any[]> {
    return this.firestore.collection('printRequests').valueChanges({ idField: 'id' });
  }

  
  addPrintRequest(printRequest: any): Promise<any> {
    return this.firestore.collection('printRequests').add(printRequest);
  }


  deletePrintRequest(id: string): Promise<void> {
    return this.firestore.collection('printRequests').doc(id).delete();
  }

  
  updatePrintRequest(id: string, printRequest: any): Promise<void> {
    return this.firestore.collection('printRequests').doc(id).update(printRequest);
  }
}
