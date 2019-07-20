// Angular services
import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
// Bing service
import { BingService } from '../services/bing.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm = new FormControl('');
  bingSearchApi = "https://www.bing.com/search?q=";
  suggestData = [];
  emptyInputErr : string;
  suggestList = false;
  
  constructor(private _bingService : BingService) { }
  searchRedirect(){
    if(this.searchForm.value == ""){
      this.emptyInputErr = "Please enter search keyword";
      this.suggestList = false;
      return;
    };
    window.location.assign(this.bingSearchApi + this.searchForm.value);
  };
  autosuggestOnChange(){
    if (this.searchForm.value == "") {
      this.suggestData = [];
      this.suggestList = false;
    } else {
      if (this.searchForm.value !== " ") {
        this.suggestList = true;
        this.getAutoSuggest();
      };
    }
  };

  getAutoSuggest(){
    return this._bingService.getSuggestions(this.searchForm.value).subscribe((data : []) => {
      for (let i = 0; i < data.length; i++) {
        this.suggestData = data[i];
      }
      if (this.suggestData !== []) {
        this.emptyInputErr = "";
      }
    })
  };
  selectedSuggest(suggestItem : any){
      window.location.assign(this.bingSearchApi + suggestItem);
   };
  ngOnInit() {
  }
};