import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, filter, map, of, scan, tap } from 'rxjs';

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
    private imageId$ = new BehaviorSubject<number>(0);

    currentImageId$ = this.imageId$.pipe(
        map((value) => {
            return value > 0 ? value : 0;
        })
    );

    nextDisabled$ = this.imageId$.pipe(
        map((value) => {
            return value >= this.images.length - 1;
        })
    );

    prevDisabled$ = this.imageId$.pipe(
        map((value) => {
            return value <= 0;
        })
    );

    images: Image[] = [
        { id: 0, src: 'img0', title: 'image 0' },
        { id: 1, src: 'img1', title: 'image 1' },
        { id: 2, src: 'img2', title: 'image 2' },
        { id: 3, src: 'img3', title: 'image 3' },
        { id: 4, src: 'img4', title: 'image 4' },
        { id: 5, src: 'img5', title: 'image 5' },
        { id: 6, src: 'img6', title: 'image 6' },
        { id: 7, src: 'img7', title: 'image 7' },
        { id: 8, src: 'img8', title: 'image 8' },
    ];
    constructor() {}

    ngOnInit() {}

    prev() {
        this.imageId$.next(this.imageId$.getValue() - 1);
    }

    next(index?: number) {
        this.imageId$.next(index ?? this.imageId$.getValue() + 1);
    }

    trackByFn(index: number, item: Image) {
        return item.id;
    }
}
