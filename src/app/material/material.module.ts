import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatSelectModule,
  MatListModule,
  MatTableModule,
  MatDividerModule,
  MatSidenavModule,
  MatGridListModule
        } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatListModule,
    MatTableModule,
    MatDividerModule,
    MatSidenavModule,
    MatGridListModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatListModule,
    MatTableModule,
    MatDividerModule,
    MatSidenavModule,
    MatGridListModule

  ]
})
export class MaterialModule { }
