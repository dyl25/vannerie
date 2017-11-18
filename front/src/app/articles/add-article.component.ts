import {Component} from '@angular/core';

import {Article} from './article';

@Component({
    selector: 'app-articles',
    template: `
    <section class="row">
      <h2>Ajouter un article</h2>
      <article-form></article-form>
    </section>
    `,
    styleUrls: ['./articles.component.css']
})
export class AddArticleComponent {}
