import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import { environment } from 'environments/environment';
import { Product } from 'app/products/products.models';


@Injectable()
export class ProductsService {

  constructor(private http: Http) { }


  public getProducts(): Observable<Product[]> {
    let url = environment.baseUrl + '/products';
    let options: RequestOptionsArgs = { headers: this.getHeaders() };
    return this.http.get(url, options)
      .map(res => <Product[]>res.json())
      .catch(this.handleError);
  }

  private getHeaders(): Headers {
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    return headers;
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
