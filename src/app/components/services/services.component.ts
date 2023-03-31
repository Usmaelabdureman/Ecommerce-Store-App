import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Image {
  description: string;
  imageUrl: string;
}
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit{

  images: Image[] | undefined;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<Image[]>('http://localhost:3000/images').subscribe(
      (response) => {
        this.images = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
