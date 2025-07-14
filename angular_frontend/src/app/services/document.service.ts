import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export interface Document {
  id: string;
  title: string;
  content: string;
  owner: string;
  updatedAt: string;
  collaborators?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private apiBase = '/api';
  private currentDocSubject = new BehaviorSubject<Document | null>(null);
  currentDoc$ = this.currentDocSubject.asObservable();

  // --- Real-time collaboration socket placeholder ---
  socket: WebSocket | null = null;
  socketMessages$ = new Subject<any>();

  constructor() {}
}
