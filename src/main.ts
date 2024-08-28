import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    // Aquí puedes configurar directamente los proveedores si es necesario
    { provide: RouterModule, useValue: RouterModule.forRoot([]) } // Configura las rutas si es necesario
  ]
}).catch(err => console.error(err));
