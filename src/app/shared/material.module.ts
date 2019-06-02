import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule, MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatSelectModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  exports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    MatExpansionModule,
    MatSelectModule
  ]
})
export class MaterialModule {}
