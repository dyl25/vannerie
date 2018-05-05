import {Component, Input, OnChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import { Article } from '../../shared/models/article';
import { ArticlesService } from '../../core/services/articles.service';

@Component({
    selector: 'article-form',
    templateUrl: './article-form.component.html',
    //styleUrls: ['./articles.component.css']
})
export class ArticleFormComponent implements OnChanges{

    @Input() article: Article;
    articleForm: FormGroup;
    //informations sur la validation du formulaire
    articleErrors: Array<string> = [];

    constructor(private fb: FormBuilder, private articlesService: ArticlesService, private router: Router) {
        this.createForm();
    }

    //permet de racourcir la syntaxe dans le formulaire
    get title() { return this.articleForm.get('title') }
    get content() { return this.articleForm.get('content') }

    createForm() {
        this.articleForm = this.fb.group({
            title: ['', [Validators.minLength(5),Validators.required, Validators.maxLength(191)]],
            content: ['', [Validators.required, Validators.minLength(10)]]
        });
    }

    ngOnChanges() {
        this.articleForm.reset({
            title: this.article.title,
            content: this.article.content
        });
    }

    onSubmit() {
        if(this.articleForm.valid) {
            this.prepareSaveArticle(this.articleForm.value);

            this.articlesService.updateArticle(this.article).subscribe(data => {
                let link = ['/articles', this.article.id];
                this.router.navigate(link);
            },
            err => {
                this.articleErrors = [];
                this.articleErrors.push(/*err*/'Une erreur s\'est produite lors de la sauvegarde');
            }
        );
    }
}

revert() { this.ngOnChanges(); }

private prepareSaveArticle(formValue: FormGroup): void {
    Object.assign(this.article, formValue);
}
}
