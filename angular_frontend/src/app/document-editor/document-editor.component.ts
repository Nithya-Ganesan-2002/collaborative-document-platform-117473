import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-document-editor',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './document-editor.component.html',
  styleUrl: './document-editor.component.css'
})
export class DocumentEditorComponent implements OnInit, OnDestroy {
  docId: string = '';
  document: Document | null = null;
  content: string = '';
  title: string = '';
  saveStatus: string = '';
  collaborationMsg: string = '';
  wsSub?: Subscription;
  loading = true;
  error = '';

  constructor() {}

  ngOnInit() {
    // Handler left empty for now - implement doc load/collaboration as needed.
  }

  // PUBLIC_INTERFACE
  onSave() {
    // Handler left empty for now - implement save logic as needed.
  }

  ngOnDestroy() {
    // Handler left empty for now
  }
}
