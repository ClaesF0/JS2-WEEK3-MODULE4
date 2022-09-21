/*
Asynchronous callbacks ("CALLBACK HELL")

Asynchronous callbacks work by nesting callbacks.

Let’s take a look at a fake example so we can understand how this would look.

Note: This fake example has example functions that we call but were not added to the example to reduce complexity.

The following steps take place:

    We call showArticles
    We do an API call
    We filter the articles
    We sort the articles
    We map through the articles.
    We display an article.

*/


function showArticles() {
    doAPICall(function (data)) {
      filterArticles(function (data)) {
        sortArticles(function (data)) {
          data.map(function (item) {
            displayArticle(function(item) {
              // Display the article
            })
          })
        }
      }
    }
  }
  