import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchArticlesById } from "../api functions/api";

const ArticleSingle = () => {

    const [article, setArticle] = useState({})

    let {pathname} = useLocation();
    const regex = /\d+$/gi;
    const article_id = Number(pathname.match(regex))

    useEffect(()=>{
        fetchArticlesById(article_id).then((articleFromApiById) => {
            setArticle(articleFromApiById.data.article)
        })
    }, [])

    return (
        <>
        <div className="article--info">
            <h3 className="article--title">{article.title}</h3>
            <p className="article--body">{article.body}</p>
            <p className="article--author">Author: {article.author}</p>
            <p className="article--topic">Topic: {article.topic}</p>
            <p className="article--created_at">Posted: {article.created_at}</p>
            <p className="article--votes">Votes: {article.votes}</p>
            <p className="article--comment_count">Comments: {article.comment_count}</p>

        </div>
        </>
    )
}

export default ArticleSingle;