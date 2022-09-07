import { useState, useContext } from "react";
import { UserContext } from "../context/User";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { fetchArticles } from "../api functions/api";

const Home = () => {

    const {loggedInUser} = useContext(UserContext)
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetchArticles().then((articlesFromApi) => {
            setArticles(articlesFromApi.data.articles)
        })
    }, [])

    return (
        <>
        <section className="home--intro">{`Hi ${loggedInUser.username}, welcome to WTAN! We're a news website dedicated to bringing you latest, greatest and unbiased news this side of the web!`}</section>
        <br />
        <p className="home--intro">Browse some highlighted articles below:</p>
        <div className="home--articles_collection">
        <section className="home--article_card">
            <ul className="articles--card_list">
                {articles.map(({article_id, title, author, topic, created_at, votes, comment_count}, index) => {
                    if (index < 6) {
                        return (
                            <li className="article--card" key={article_id}>
                            <h3 className="article--card--title">{title}</h3>
                            <h3 className="article--card--author">Author: {author}</h3>
                            <h3 className="article--card--topic">Topic: {topic}</h3>
                            <h3 className="article--card--created_at">Posted: {created_at.substring(0,10)}</h3>
                            <h3 className="article--card--votes">Votes: {votes === 0 ? "Be the first to upvote this!": votes}</h3>
                            <h3 className="article--card--comments"> Comments: {comment_count}</h3>
                            <Link to={`/articles/${article_id}`}><button className="article--card--button">View</button></Link>
                        </li>
                    )
                }
                })}
                </ul>
                </section>
                </div>
        </>
    )
}

export default Home