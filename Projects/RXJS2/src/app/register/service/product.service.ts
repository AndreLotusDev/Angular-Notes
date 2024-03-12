
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../shared/models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    const products: Product[] = [
      {
        id: 1,
        name: 'Laptop',
        description: 'An IT product',
        imageUrl: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g15-5530/media-gallery/gray/non-touch/coral/notebook-laptop-g15-5530-gray-gallery-1-v2.psd?fmt=png-alpha&pscan=auto&scl=1&wid=4280&hei=3104&qlt=100,1&resMode=sharp2&size=4280,3104&chrss=full&imwidth=5000'
      },
      {
        id: 2,
        name: 'Smartphone',
        description: 'A mobile device',
        imageUrl: 'https://m.media-amazon.com/images/I/31i2nW6n3tL._SR290,290_.jpg'
      },
      {
        id: 3,
        name: 'Tablet',
        description: 'A portable device',
        imageUrl: 'https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/277337'
      },
      {
        id: 4,
        name: 'Desktop',
        description: 'A personal computer',
        imageUrl: 'https://i5.walmartimages.com/seo/DELL-Optiplex-7040-Desktop-Computer-PC-Intel-Quad-Core-i5-2TB-HDD-8GB-DDR3-RAM-Windows-10-Pro-DVD-WIFI-19in-Monitor-USB-Keyboard-Mouse-Used-Like-New_22b50342-15c5-4e52-83b8-6194af42fd16.3744fdd76aab16f2f17b18c53204c61c.jpeg'
      },
    ];
    return of(products);
  }
}