import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { HomeService } from './home.service';
import { Project, Media } from '../model';
import { Image } from '../gallery/image';

@Component({
    selector: 'project-details',
    styles: [`
        .container {
            margin-bottom: 30px;
        }
        .project-gallery img {
            width: 200px;
        }
    `],
    templateUrl: './project-details.component.html'
})
export class ProjectDetailsComponent implements OnInit {

    project: Project;
    galleryImages: Image[];

    constructor(private _homeService: HomeService,
                private _activatedRoute: ActivatedRoute,
                private _location: Location) {

    }

    ngOnInit() {
        this._activatedRoute.data.forEach((data: { project: Project }) => {
            this.project = data.project;
            this.getProjectGallery(this.project);
        });
    }

    navigateBack() {
        this._location.back();
    }

    private getProjectGallery(project: Project) {
        this._homeService.getMedia(project.gallery).subscribe(
            res => {
                this.galleryImages = this.convertMedia(res);
            }
        );
    }

    private convertMedia(mediaList: Media[]): Image[] {
        const images: Image[] = new Array();
        for (const media of mediaList) {
            images.push({
                thumbnail: media.source_url,
                src: media.source_url,
                alt: media.title.rendered,
                description: media.caption.rendered
            });
        }
        return images;
    }

}
