import {Component} from '@angular/core';

import {Article} from '../shared/models/article';

@Component({
    selector: 'app-articles-add',
    template: `
    <section class="row">
      <h2>Ajouter un article</h2>
      <article-form></article-form>
    </section>
    `,
    styleUrls: ['./articles.component.css']
})
export class AddArticleComponent {}
