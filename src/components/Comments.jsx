import { useState, useEffect } from "react"
import { fetchCommentsByArticle } from "../api functions/api"

const Comments = ({article_id}) => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        fetchCommentsByArticle(article_id).then((commentsFromApi) => {
            setComments(commentsFromApi.data.comments);
        })
    }, [])

    return (
        <>
        <section className="comments--section">
            <ul className="comments--list">
                {comments.map((comment) => {
                    return (
                        <li className="comment--card" key={comment.comment_id}>
                            <p className="comment--card--author">{comment.author}</p>
                            <p className="comment--card--created_at">{comment.created_at}</p>
                            <p className="comment--card--body">{comment.body}</p>
                            <p className="comment--card--votes">{comment.votes}</p>
                        </li>
                    )
                })}
            </ul>
        </section>
        </>
    )
}

export default Comments