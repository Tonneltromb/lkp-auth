import {Component, ViewEncapsulation} from '@angular/core';
import {ApplicationProperties} from '../../common/application.properties';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class MessagePageComponent {
  documents = ApplicationProperties.EIS_OPEN_PART_DOCUMENTS;
  eisMainPage = ApplicationProperties.EIS_OPEN_PART_MAIN_PAGE;
  rootUrl = ApplicationProperties.ROOT_URL;

  constructor(private http: HttpClient) {
  }

  _click() {
    this.http.get('rest/say/hello', {responseType: 'text'}).subscribe(s => {
        console.log('sucs', s);
      }, error => console.log('error', error)
    );
  }
}
