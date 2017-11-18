<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Article;

class ArticleController extends Controller {

    public function index() {
        return Article::all();
    }

    public function show(Article $article) {
        return $article;
    }

    public function store(Request $request) {
        $article = Article::create($request->all());

        return response()->json($article, 201);
    }

    public function update(Request $request, Article $article) {
      $messages = [
        'required' => 'Le :attribute est requis.',
        'min' => 'Le :attribute doit compter minimum :min caractères.',
        'max' => 'Le :attribute doit compter maximum :max caractères.'
      ];
        $this->validate($request, [
          'title' => 'bail|required|min:5|max:191',
          'content' => 'required|min:10'
        ], $messages);

        $article->update($request->all());

        return response()->json($article, 200);
    }

    public function delete(Article $article) {
        $article->delete();
        return response()->json(null, 204);
    }

}
