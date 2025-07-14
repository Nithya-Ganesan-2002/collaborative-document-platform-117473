import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  id: string;
  username: string;
  email: string;
  // add other profile fields as needed
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiBase = '/api'; // Update this with your backend API base if needed

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor() {}
}
