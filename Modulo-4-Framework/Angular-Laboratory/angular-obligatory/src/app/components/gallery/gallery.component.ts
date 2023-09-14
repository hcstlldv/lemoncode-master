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
    private imageHeight$ = new BehaviorSubject<number>(400);

    private readonly minHeight = 50;
    private readonly maxHeight = 900;
    private readonly increaseStepHeight = 50;

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

    currentImageHeigth$ = this.imageHeight$.pipe(
        map((height) => {
            if (height < this.minHeight) return this.minHeight;
            if (height > this.maxHeight) return this.maxHeight;
            return height;
        })
    );

    increaseDisabled$ = this.imageHeight$.pipe(
        map((value) => {
            return value >= this.maxHeight;
        })
    );

    decreaseDisabled$ = this.imageHeight$.pipe(
        map((value) => {
            return value <= this.minHeight;
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

    increase() {
        this.imageHeight$.next(
            this.imageHeight$.getValue() + this.increaseStepHeight
        );
    }

    decrease() {
        this.imageHeight$.next(
            this.imageHeight$.getValue() - this.increaseStepHeight
        );
    }

    trackByFn(index: number, item: Image) {
        return item.id;
    }
}
