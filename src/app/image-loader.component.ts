import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-loader',
  standalone: true,
  template: `
    <img [src]="imageUrl" (error)="onError()" alt="Image" style="max-width: 15pc;"/>
  `,
  styles: []
})
export class ImageLoaderComponent {
  @Input() src: string = '';
  @Input() fallback: string = 'assets/images/asd.jpg'; // Ruta a una imagen de fallback
  
  imageUrl: string = '';

  ngOnInit() {
    this.imageUrl = this.src || this.fallback;
  }

  onError() {
    this.imageUrl = this.fallback;
  }
}
