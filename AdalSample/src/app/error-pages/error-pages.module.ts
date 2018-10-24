import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPagesRoutingModule } from './error-pages-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [CommonModule, ErrorPagesRoutingModule],
  declarations: [NotFoundComponent]
})
export class ErrorPagesModule {}
