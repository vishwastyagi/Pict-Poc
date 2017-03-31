import {Component, provide} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {Table}    from './table';
import {RestCallService} from './restcall.service';
import {Observable} from 'rxjs/Observable';
 import 'rxjs/Rx' ;
import {Http, Response,Headers,RequestOptions} from 'angular2/http';

@Component({
  selector: 'my-app',
	templateUrl:'app/main.html',
	providers: [RestCallService]
})	
export class AppComponent {

	constructor(private restCall:RestCallService,private http:Http) {
	}

	public tables;
	public result:string;
	public rows;
	public cols;
	public drawTable;
	public data = [[]];
    public httpErrorMessage:string;
	onClick() {
		this.drawTable = 1;
		this.tables = [];
		var arr = [];
		var i = 0;
		var j = 0;
		//alert(this.rows);
	//	alert(this.cols);
		for (i = 0; i < this.rows; i++) {
			arr = [];

			for (j = 0; j < this.cols; j++) {
				arr.push(j);
			}
			//alert(arr.length);
			this.tables.push(new Table(arr));

		}
		//alert("ahskjd= "+this.tables.length);
		this.data = [[]];
		for (var i = 0; i < this.rows - 1; i++) {
			this.data.push(new Array<string>());
			for (var j = 0; j < this.cols; j++) {
				this.data[i].push(new Array<string>());
				//this.data[i,j]='';
			}
		}
		//this.data[this.rows,this.cols];
		//console.log(this.data.length);
		//console.log(this.data);
	}

	onKey() {
		this.drawTable = 0;

	}

	onClick2() {
	//	alert(this.rows);
		//alert(this.cols);
		var i = 0;
		var j = 0;
		//console.log(this.data.length);
		//console.log(this.data);
		/*for (i = 0; i < this.rows; i++) {
			for (j = 0; j < this.cols; j++) {
				//	alert(this.data[i][j]);
				console.log("this.data[" + i + "][" + j + "]= " + this.data[i][j]);
			}
		}*/
		var reader = new FileReader();
		/*this.http.get('http://localhost:8082/PictAPI/generate/get').subscribe(
			(response) => {
				var mediaType = 'application/pdf';
				var blob = new Blob([response._	body], {type: mediaType});
				var filename = 'test.pdf';
				saveAs(blob, filename);
			});*/
		//var myWindow = window.open("http://localhost:8082/PictAPI/generate/get", "", "width=200,height=100");

		var temp=JSON.stringify(this.data);
		var x={"testCaseArray":this.data};
		let  body=  JSON.stringify(x);
		console.log("body "+body);
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 200) {
				alert("Success");

				//console.log(xhttp.responseBody);
				//console.log(xhttp.getAllResponseHeaders());
				//console.log(xhttp.responseText);
				//console.log(xhttp.responseType);
				var blob = new Blob([xhttp.responseText],  {type: "text/plain;charset=utf-8"});
				//var blob = new Blob([xhttp.responseText], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel;charset=charset=utf-8'});
				//var blob = new Blob([xhttp.responseText], { type: 'application/vnd.ms-excel;charset=utf-8'});
				//reader.readAsDataURL(blob);
				saveAs(blob, "abc.txt");
			//	var url= window.URL.createObjectURL(blob);
			//	window.open(url);

			}
            else{
				//alert("Server Error");
                this.httpErrorMessage="Server Error";
            }
		};
		xhttp.open("POST","http://localhost:8082/PictAPI/generate", true);
		xhttp.setRequestHeader("Content-type", "application/json");
		//xhttp.setRequestHeader("Accept", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel");
		xhttp.setRequestHeader("Accept", 'text/plain');
		//console.log("body before sending= "+body);
		xhttp.send(body);



		// this.restCall.getCombination(this.rows,this.cols,this.data).subscribe(error=>this.handleError(error));

	/*	this.restCall.getCombination(this.rows, this.cols, this.data) .subscribe(res => reader.readAsDataURL(res),
			error => {console.log("Error downloading the file.");this.handleError(error)},
			() => console.log('Completed file download.'));
*/



		/*this.restCall.getCombination(this.rows, this.cols, this.data).subscribe(data => window.open(window.URL.createObjectURL(data)),
			error => console.log("Error downloading the file."),
			() => console.log('Completed file download.'));*/

		/*this.restCall.getCombination(this.rows, this.cols, this.data). subscribe((response) => {
				var mediaType = 'application/vnd.ms-excel';
				var blob = new Blob([response._body], {type: mediaType});
				var filename = 'test.xls';
				saveAs(blob, filename);
			});*/
		

	/*	this.restCall.getCombination(this.rows, this.cols, this.data). subscribe(data => this.descargarArchivo(data)),//console.log(data),
			error => console.log("Error downloading the file."),
			() => console.info("OK");
*/


		/*reader.onloadend = function (e) {
			window.open(reader.result, 'csv', 'width=20,height=10,toolbar=0,menubar=0,scrollbars=no');
			//alert(this.data.toString());
		}*/


	}
	private handleError (error) {

        this.httpErrorMessage="Server Error";
		return Observable.throw(error|| 'Server error');
	}

	/*descargarArchivo(mydata: Response){
		var blob = new Blob([mydata], { type: 'text/plain' });
		var url= window.URL.createObjectURL(blob);
		window.open(url);
	}*/

}