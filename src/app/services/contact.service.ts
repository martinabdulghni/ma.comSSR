// contact.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root',
})
export class ContactService {
   private apiUrl = 'https://your-api-endpoint.com/contact'; // Replace with your API endpoint

   constructor(private http: HttpClient) {}

   sendContactForm(formData: any): Observable<any> {
      return this.http.post<any>(this.apiUrl, formData);
   }
}
