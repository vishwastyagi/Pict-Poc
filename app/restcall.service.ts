import {Injectable} from "angular2/core";
import {Http, Response,Headers,RequestOptions} from 'angular2/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
/**
 * Created by 608991700 on 27/05/2016.
 */

@Injectable()
export class RestCallService{
    constructor(private http:Http){}

    getCombination(rows:number,cols:number, data:string[][]){
        console.log(data);
        console.log(rows);
        console.log(cols);
        let i=0;
        let j=0;
        for(i=0;i<rows;i++){
            for(j=0;j<cols;j++) {
                console.log(data[i][j]);
            }
        }
        //console.log(JSON.stringify(data));
     //   let body = 'testCaseArray='+data;
      //  console.log(JSON.stringify("testCaseArray: "+JSON.stringify(data)));
      //  console.log(JSON.stringify("testCaseArray")+":"+JSON.stringify(data));
        var temp=JSON.stringify(data);
        var x={"testCaseArray":data};
        let  body=  JSON.stringify(x);

        console.log("body= "+body);
        let _url="http://localhost:8082/PictAPI/generate";
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Accept', 'application/vnd.ms-excel');
       // let headers = new Headers({ 'Accept': 'application/vnd.ms-excel' });
        //let headers = new Headers({ 'Accept': 'text/plain' });
        let options = new RequestOptions({ headers: headers });
       // this.http.post(_url,body,options);
        return this.http.post(_url,body,options).map(res => {new Blob([res],{ type: 'application/vnd.ms-excel' });console.log(res)}).catch(this.handleError);


  //    return this.http.get(_url,options).map(res=>{res;console.log(res);}).catch(this.handleError);
       // return this.http.get(_url,options).map(res=>new Blob([res],{type:'application/vnd.ms-excel'})).catch(this.handleError);

    }

    private handleError (error: Response) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
    }


}