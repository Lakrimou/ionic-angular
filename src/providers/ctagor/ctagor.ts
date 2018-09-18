import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
 Generated class for the RestProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class CtagorProvider {

    id: any;
    apiUrl = 'https://www.tasseera.com/endpoint';

    constructor(public http: HttpClient) {
        console.log('Hello CtagorProvider Provider');
    }
    getSubcategs(idd) {

        console.log('*******'+idd);
        return new Promise(resolve => {
            this.http.get(this.apiUrl+'/category/'+idd).subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

}
