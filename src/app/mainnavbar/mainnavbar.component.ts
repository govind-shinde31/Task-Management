import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainnavbar',
  templateUrl: './mainnavbar.component.html',
  styleUrls: ['./mainnavbar.component.scss']
})
export class MainnavbarComponent {

  searchText: string = '';

  constructor(private router: Router) { }

  onSearch(searchTerm: HTMLInputElement) {
    const searchText = searchTerm.value.trim();
    if (searchText !== '') {
      this.router.navigate(['/search'], { queryParams: { q: searchText } });
    }
  }
  
}
