import { Component, OnInit } from '@angular/core';
import {IPhoto} from '../model/photo';
import {PhotoService} from '../photo.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  photos: IPhoto[] = []

  constructor(private photoService: PhotoService,
              private  fb: FormBuilder) {

  }

  ngOnInit() {
    this.photoService.getListPhoto().subscribe(a => (this.photos = a), e => console.log(e));
  }

}
