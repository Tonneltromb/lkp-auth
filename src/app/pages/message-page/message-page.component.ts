import {Component} from '@angular/core';
import {ApplicationProperties} from '../../common/application.properties';

@Component({
  selector: 'app-message-page',
  templateUrl: 'message-page.component.html'
})

export class MessagePageComponent {
  documents = ApplicationProperties.EIS_OPEN_PART_DOCUMENTS;
  eisMainPage = ApplicationProperties.EIS_OPEN_PART_MAIN_PAGE;
  rootUrl = ApplicationProperties.ROOT_URL;
}
