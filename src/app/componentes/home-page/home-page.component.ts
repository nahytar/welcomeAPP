import { Component, OnInit, Input, Output } from '@angular/core';
import { post } from 'selenium-webdriver/http';
import { EventEmitter } from 'events';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    @Input() post: any = {}
    @Output() postAgregado: EventEmitter;

    constructor() {
        this.postAgregado = new EventEmitter();
    }


    ngOnInit() {
    }
    createPost() {

    }
    addPost() {
        this.postAgregado.emit(this.post);
        // let postNew = {
        //     content: this.memeForm.value.description,
        //     likes: 0,
        //     key$: string
        // }
    }

}
