import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { GmbService } from '../gmb.service';
import { Gmb } from 'src/app/shared/models/gmb.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-gmb-centre',
  templateUrl: './gmb-centre.component.html',
  styleUrls: ['./gmb-centre.component.scss']
})
export class GmbCentreComponent implements OnInit {

  subscription: Subscription = new Subscription();
  gmb: Gmb;
  
  constructor(
    private _gmbService: GmbService,
    
  ) { }

  ngOnInit(): void {
     this.getGmbCentre();
    this.getGmbInsights();

  }

  
  
  getGmbCentre(): void {
    this.subscription.add(
      this._gmbService.getGmbCentre().subscribe((response : Gmb)=> { 
        console.log(response);
        this.gmb = response;
        console.log(this.gmb.average_rating)
      })
    );
  }
  
  getGmbInsights(): void {
  this.subscription.add(
    this._gmbService.getGmbInsights().subscribe(response => { 
      console.log(response);
    })
  );
  }
  
}