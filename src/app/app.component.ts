import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


/**This info displayed through interpolation in app.component.html. Interpolation is {{}}*/
export class AppComponent {
  title = 'app';
  test_element = 'this dynamically added through app.comonent.ts'

  yash_info = {
  	name: 'Yash Parekh',
  	gender: 'male',
  	age: 22,
  	location: 'Denver'
  }

  /*Creating an array of info about experience*/
  my_experiences = ['Echostar', 'Revature', 'Ucroo'];
}
