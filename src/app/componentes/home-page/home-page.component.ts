import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { post } from 'selenium-webdriver/http';
import { EventEmitter } from 'events';



@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})

export class HomePageComponent implements OnInit {
    post: FormGroup;

    // @Input() post: any = {}
    // @Output() postAgregado: EventEmitter;

    constructor() {
        this.post = new FormGroup({
            'usuario': new FormControl(),
            'contenido': new FormControl('', [Validators.required, Validators.maxLength(10)]),
            'likes': new FormControl(0),


        });
        // this.postAgregado = new EventEmitter();
    }


    ngOnInit() {
    }
    createPost() {
        console.log(this.post.value);
    }
    addPost() {
        /* this.postAgregado.emit(this.post); */
        // let postNew = {
        //     content: this.memeForm.value.description,
        //     likes: 0,
        //     key$: string
        // }
    }

}
