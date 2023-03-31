import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  selectedFile!: File;
  imageUrl!: string;
  description!: string;

  
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  onFileSelected(event: Event): void {
    this.selectedFile = (event.target as HTMLInputElement).files![0];
  }

  onSubmitWithDescription(): void {
    const formData = new FormData();
    formData.append('imageUrl', this.selectedFile, this.selectedFile.name);
    formData.append('description', this.description);
    this.http
      .post<{ message: string, newImage: any }>('http://localhost:3000/upload', formData)
      .subscribe(
        (res) => {
          this.imageUrl = res.newImage.imageUrl;
          this.displayImage();
          this.snackBar.open(res.message, 'Dismiss', {
            duration: 10000,
          });
        },
        (err) => {
          console.error(err);
          this.snackBar.open('Failed to upload image', 'Dismiss', {
            duration: 10000,
          });
        }
      );
  }

  displayImage(): void {
    const imageContainer = document.getElementById('image-container');
    if (imageContainer) {
      const img = document.createElement('img');
      img.src = `http://localhost:3000/${this.imageUrl}`;
      const description = this.description;
      imageContainer.appendChild(img);
    }
  }
}
