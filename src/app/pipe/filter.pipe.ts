import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  fullName:string=''
  
transform(allUsers:any[],searchKey:string,propertyName:string): any[] {

    // array after transform
    const result:any = []
if(!allUsers || searchKey ==''|| propertyName ==''){
  return allUsers
}
allUsers.forEach((users:any)=>{

let text1=users.firstName;
let text2=users.lastName;
this.fullName=text1.concat(text2)
if( this.fullName.trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
  result.push(users)
}
})
    return result;
  }

}
