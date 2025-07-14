import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // PUBLIC_INTERFACE
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component').then((m) => m.LoginComponent),
    title: 'Login',
  },
  // PUBLIC_INTERFACE
  {
    path: 'register',
    loadComponent: () =>
      import('./auth/register/register.component').then((m) => m.RegisterComponent),
    title: 'Register',
  },
  // PUBLIC_INTERFACE
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then((m) => m.DashboardComponent),
    title: 'Dashboard',
  },
  // PUBLIC_INTERFACE
  {
    path: 'profile',
    loadComponent: () =>
      import('./profile/profile.component').then((m) => m.ProfileComponent),
    title: 'Profile',
  },
  // PUBLIC_INTERFACE
  {
    path: 'document/:id',
    loadComponent: () =>
      import('./document-editor/document-editor.component').then((m) => m.DocumentEditorComponent),
    title: 'Document Editor'
  }
];
