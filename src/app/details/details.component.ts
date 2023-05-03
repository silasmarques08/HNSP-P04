import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../request/request.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  cIdSearch: string;
  isLoading: boolean;
  cDetails: any[];
  cTitles: string[];

  constructor(private actRoute: ActivatedRoute, private requestService: RequestService) {
    this.cDetails = [];
    this.cIdSearch = this.actRoute.snapshot.params['id'];
    this.getDetails(this.cIdSearch);
  }

  getDetails(id: string) {
    this.requestService.getDetailsServer(id)
      .subscribe(data => {
        this.isLoading = true;
        this.cDetails = Object.values(data);
        this.cTitles = Object.keys(data);
        this.isLoading = false;
      })
  }

}
