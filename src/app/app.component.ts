import { Component } from '@angular/core';
import { ApiServicesService } from './Services/api-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Api';

  userData:any = [];
  totalData:any;
  page:number = 1;

  constructor(private apiService : ApiServicesService){

    // this.apiService.getData().subscribe((data) =>{
      // console.log(data);

      // this.userData = data;
  
  // });
  }
  getInfo(){
    this.apiService.getData().subscribe((data) =>{
      // console.log(data);

      this.userData = data;
    
    });
  }
}
