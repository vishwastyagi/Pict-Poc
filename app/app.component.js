System.register(['angular2/core', './table', './restcall.service', 'rxjs/Observable', 'rxjs/Rx', 'angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, table_1, restcall_service_1, Observable_1, http_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (table_1_1) {
                table_1 = table_1_1;
            },
            function (restcall_service_1_1) {
                restcall_service_1 = restcall_service_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(restCall, http) {
                    this.restCall = restCall;
                    this.http = http;
                    this.data = [[]];
                }
                AppComponent.prototype.onClick = function () {
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
                        this.tables.push(new table_1.Table(arr));
                    }
                    //alert("ahskjd= "+this.tables.length);
                    this.data = [[]];
                    for (var i = 0; i < this.rows - 1; i++) {
                        this.data.push(new Array());
                        for (var j = 0; j < this.cols; j++) {
                            this.data[i].push(new Array());
                        }
                    }
                    //this.data[this.rows,this.cols];
                    //console.log(this.data.length);
                    //console.log(this.data);
                };
                AppComponent.prototype.onKey = function () {
                    this.drawTable = 0;
                };
                AppComponent.prototype.onClick2 = function () {
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
                    var temp = JSON.stringify(this.data);
                    var x = { "testCaseArray": this.data };
                    var body = JSON.stringify(x);
                    console.log("body " + body);
                    var xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function () {
                        if (xhttp.readyState == 4 && xhttp.status == 200) {
                            alert("Success");
                            //console.log(xhttp.responseBody);
                            //console.log(xhttp.getAllResponseHeaders());
                            //console.log(xhttp.responseText);
                            //console.log(xhttp.responseType);
                            var blob = new Blob([xhttp.responseText], { type: "text/plain;charset=utf-8" });
                            //var blob = new Blob([xhttp.responseText], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel;charset=charset=utf-8'});
                            //var blob = new Blob([xhttp.responseText], { type: 'application/vnd.ms-excel;charset=utf-8'});
                            //reader.readAsDataURL(blob);
                            saveAs(blob, "abc.txt");
                        }
                        else {
                            //alert("Server Error");
                            this.httpErrorMessage = "Server Error";
                        }
                    };
                    xhttp.open("POST", "http://localhost:8082/PictAPI/generate", true);
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
                };
                AppComponent.prototype.handleError = function (error) {
                    this.httpErrorMessage = "Server Error";
                    return Observable_1.Observable.throw(error || 'Server error');
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/main.html',
                        providers: [restcall_service_1.RestCallService]
                    }), 
                    __metadata('design:paramtypes', [restcall_service_1.RestCallService, http_1.Http])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map