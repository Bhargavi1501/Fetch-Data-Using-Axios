import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(dataArray: any[], searchTerm: string, searchOption:string): any[] {

    if (!searchTerm) {
      return dataArray;
    } else if(searchTerm && searchOption == "title"){
      return dataArray.filter(obj => obj.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }else if(searchTerm && searchOption == "userId"){
      return dataArray.filter(obj => obj.userId == searchTerm);
    }else if(searchTerm && searchOption == "id"){
      return dataArray.filter(obj => obj.id == searchTerm);
    }else if(searchTerm && searchOption == "body"){
      return dataArray.filter(obj => obj.body.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
  }
 
}
