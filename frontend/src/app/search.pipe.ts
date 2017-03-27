import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'searchPipe',
    pure: false
})
export class SearchPipe implements PipeTransform {
    public transform(value, client: Client, term: string) {
        return value.filter(item => {
            if(term){
                let searchInJob = Object.values(item.job).join(',');
                let searchInGeneral = Object.values(item.general).slice(0,2).join(',');
                let searchInContact = Object.values(item.contact).splice(0,1).join(',');
                let searchInAddress = Object.values(item.address).splice(0,2).join(',');
                let searchString = searchInJob + ','+ searchInGeneral + ',' + searchInContact + ',' + searchInAddress;
                if (searchString.toLowerCase().indexOf(term.toLowerCase()) !==-1) {
                    return true;
                } else {
                    return false;
                }
            }else{
                return true;
            }
        });
    }
}