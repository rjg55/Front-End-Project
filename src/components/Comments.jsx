import { useState, useEffect, useContext } from "react"
import { fetchCommentsByArticle, postCommentByArticle } from "../api functions/api"
import { UserContext } from "../context/User"

const Comments = ({article_id}) => {

    const {loggedInUser} = useContext(UserContext)
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState("")
    const [refreshComments, setRefreshComments] = useState(false)
    const [isLoading, setIsLoading] = useState(true);


    function handleSubmit(e) {
        e.preventDefault();
        postCommentByArticle(article_id, loggedInUser.username, newComment).then(() => {setNewComment('')}).catch((err) => {console.log(err);})
        setRefreshComments(true)
    }

    useEffect(() => {
        fetchCommentsByArticle(article_id).then((commentsFromApi) => {
            setComments(commentsFromApi.data.comments);
            setRefreshComments(false)
            setIsLoading(false)
        })
    }, [refreshComments, isLoading])

    const commentsArr = comments.map((comment) => {
        return (
            <li className="comment--card" key={comment.comment_id}>
                <p className="comment--card--author">{comment.author}</p>
                <p className="comment--card--created_at">{comment.created_at}</p>
                <p className="comment--card--body">{comment.body}</p>
                <p className="comment--card--votes">{comment.votes}</p>
            </li>
        )
    }) 


    if (isLoading) {
        return (
            <p>Comments are loading...</p>
        )
    } else {

        return (
            <>
        <section className="comments--section">
            <form action="post" onSubmit={handleSubmit}className="comment--form">
                <label htmlFor="comment">Add a comment</label>
                <textarea id="comment" placeholder="Start writing here..." onChange={(event) => setNewComment(event.target.value)} value={newComment} required></textarea>
                <input type="submit" value="Submit"/>
            </form>
            <ul className="comments--list">
                {commentsArr}
            </ul>
        </section>
        </>
    )
}
}

export default Comments