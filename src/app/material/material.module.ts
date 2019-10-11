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
  MatExpansionModule,
  MatRippleModule,
  MatSliderModule,
  MatSlideToggleModule
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
    MatExpansionModule,
    MatRippleModule,
    MatSliderModule,
    MatSlideToggleModule
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
    MatExpansionModule,
    MatRippleModule,
    MatSliderModule,
    MatSlideToggleModule
  ]
})
export class MaterialModule { }
