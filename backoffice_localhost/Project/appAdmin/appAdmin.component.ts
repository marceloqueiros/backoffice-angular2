import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';

declare var _gaq:Function;
declare var $:any;

@Component({
    selector: 'my-appAdmin',
    templateUrl: 'appAdmin/appAdmin.component.html'
})

export class AppComponent implements OnInit{
    ngOnInit(){
        $.getScript('../assets/js/light-bootstrap-dashboard.js');
    }
    public isMaps(path){
        if(path == window.location.pathname){
            return true;
        }
        else {
            return false;
        }
    }
}
