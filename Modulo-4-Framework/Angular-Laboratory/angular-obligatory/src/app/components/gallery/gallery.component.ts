import { Component, OnInit } from '@angular/core';

type Image = {
    id: number;
    src: string;
    title: string;
};

@Component({
    selector: 'app-gallery',
    templateUrl: 'gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
    currentImageId: number = 1;

    images: Image[] = [
        { id: 1, src: 'img1', title: 'image 1' },
        { id: 2, src: 'img2', title: 'image 2' },
        { id: 3, src: 'img3', title: 'image 3' },
        { id: 4, src: 'img4', title: 'image 4' },
        { id: 5, src: 'img5', title: 'image 5' },
        { id: 6, src: 'img6', title: 'image 6' },
        { id: 7, src: 'img7', title: 'image 7' },
        { id: 8, src: 'img8', title: 'image 8' },
        { id: 9, src: 'img9', title: 'image 9' },
    ];
    constructor() {}

    ngOnInit() {}

    trackByFn(index: number, item: Image) {
        return item.id;
    }
}
