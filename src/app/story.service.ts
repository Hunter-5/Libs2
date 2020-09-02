import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
	private storiesURL = 'https://code-challenge-madlib-template.s3-us-west-2.amazonaws.com/madlib-templates.json';
	constructor(private http: HttpClient) { }

	getStories(): Observable<string[]>{
		return this.http.get<string[]>(this.storiesURL);
	}
}
