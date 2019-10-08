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
  MatGridListModule,
  MatExpansionModule
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
    MatGridListModule,
    MatExpansionModule
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
    MatGridListModule,
    MatExpansionModule

  ]
})
export class MaterialModule { }
