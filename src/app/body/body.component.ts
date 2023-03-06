import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  allUsers:any 
  searchContact:string = ''
   searchKey:string = ''


constructor(private api:ApiService){

}
 

ngOnInit(): void {

  this.getallUsers()
}
getallUsers(){
  this.api.allUsers()
  .subscribe((data:any)=>{
    console.log(data);
    
    this.allUsers= data.users
    // console.log(this.allUsers);
    
  })
  
}


}
