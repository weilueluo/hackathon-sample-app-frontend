import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';

interface BackendResponse {
  message: string,
}


@Injectable()
@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.sass'],
})
export class BackendComponent {

  backendMessage: string = '';
  clicks: number = 0;


  constructor(private http: HttpClient) {}

  onBackendButtonClick() {
    this.clicks++;
    
    const backend_url = `http://localhost:3000/clicks/${this.clicks}`;
    this.http
      .get<BackendResponse>(backend_url)
      .subscribe((response) => {
        console.log(response);
        this.backendMessage = response.message;
      });
  }
}
