import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  documents: Document[] = [];
  loading = true;
  error = '';

  constructor() {}

  ngOnInit() {
    // Handler left empty for now - implement document fetching as needed.
  }

  // PUBLIC_INTERFACE
  openDocument(doc: Document) {
    // Handler left empty for now - implement doc navigation
  }
}
