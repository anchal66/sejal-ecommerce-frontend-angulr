import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8888/api/products"

  constructor(private http: HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this.http.get<GetResponse>(this.baseUrl).pipe(
      map(res => res._embedded.products)
    )
  }
}

interface GetResponse {
  _embedded:{
    products: Product[];
  }
}
