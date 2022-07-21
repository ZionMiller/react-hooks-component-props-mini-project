// Make an `ArticleList` component as a child of `App`. It should return:

// - a `<main>` element with the following components inside:
//   - an array of `Article` components (one component for each _post_ passed down
//     as a prop to `ArticleList`)
//   - make sure to assign a unique `key` prop to each `Article`

import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    // console.log(posts)
    return (
        posts.map(post => {
            return <main key={post.id}>
            <Article 
            title={post.title}
            date={post.date}
            preview={post.preview}
            />
            </main>
        })
    );
}

export default ArticleList
