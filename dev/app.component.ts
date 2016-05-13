import {Component} from 'angular2/core';
import {MyPuzzleComponent} from './puzzle/my-puzzle.component';

@Component({
    selector: 'my-app',
    template: `<my-puzzle></my-puzzle>`,
    directives: [MyPuzzleComponent]
})
export class AppComponent {

}
