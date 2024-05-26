import { Component } from "@angular/core";
import { movieArray } from "../../const/TMDBdata";
import { Imovie } from "../../modules/TMDB.interface";





@Component({
    selector : 'app-movie',
    templateUrl : './TMDB.component.html',
    styleUrls : ['./TMDB.component.scss']
})
export class MovieComponent{
   movieData : Array<Imovie> = movieArray
    constructor(){

    }
}