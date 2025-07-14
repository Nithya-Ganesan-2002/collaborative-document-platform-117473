// Import User type from AuthService
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../services/auth.service';
// PUBLIC_INTERFACE
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  user: User | null = null;
  loading = true;

  constructor() {}

  ngOnInit() {
    // Handler left empty for now - implement profile fetch as needed.
  }
}
