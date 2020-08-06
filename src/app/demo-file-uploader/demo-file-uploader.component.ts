import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-file-uploader',
  templateUrl: './demo-file-uploader.component.html',
  styleUrls: ['./demo-file-uploader.component.css']
})
export class DemoFileUploaderComponent implements OnInit {

  url = "https://www.lifewire.com/thmb/2KYEaloqH6P4xz3c9Ot2GlPLuds=/1920x1080/smart/filters:no_upscale()/cloud-upload-a30f385a928e44e199a62210d578375a.jpg";
  selectedFile : File = null;

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(event : any) {
    if(event.target.files) {
      this.selectedFile = <File>event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);
      reader.onload = (e: any) => {
        this.url = e.target.result;
      }
    } else {
      this.selectedFile = null;
    }
  }

  uploadImage() {
    const fd = new FormData();
    fd.append('image',this.selectedFile, this.selectedFile.name);
    console.log('FormData value'+ fd);
    alert('File '+ this.selectedFile.name +' is Uploaded...');
    /* Send this fd data in http post to save the image in server */
  }
}
