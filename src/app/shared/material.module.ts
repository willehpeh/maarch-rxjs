import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatToolbarModule } from '@angular/material';

@NgModule({
  exports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class MaterialModule {}
