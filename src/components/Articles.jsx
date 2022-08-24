import { useEffect, useState } from "react"
import { useParams, Link, useSearchParams } from "react-router-dom"
import { fetchArticles, fetchArticlesByTopic } from "../api functions/api"

const Articles = () => {

    const [articles, setArticles] = useState([])
    const [param, setParam] = useParams()
    const {topic_id} = useParams();
    const [searchParams, setSearchParams] = useSearchParams()


    useEffect(() => {
    if (!topic_id) {
            fetchArticles(searchParams).then((articlesFromApi) => {
                setArticles(articlesFromApi.data.articles)
            })
        } else {
            fetchArticlesByTopic(topic_id).then((articlesByTopicFromApi) => {
                setArticles(articlesByTopicFromApi.data.articles)
            })
        }
    }, [topic_id, searchParams])

    function handleClick(e) {
        e.preventDefault();
        let params = e.target.value;
        setSearchParams('sortby')
        setParam('created_at')
        }

// use axios params feature to input sortby&query into api request
// use useSearchParams to update the URL for better UX
// then pass on the queries in the url to the fetch request
// update useEffect to re-render when the sorted/ordered articles come back

    return (
        <>
        <section className="articles--sort">
            <p className="articles--sort--title">Sort by:</p>
            <button onClick={handleClick} className="articles--sort--date" value='created_at'>Date</button>
            <button className="articles--sort--comments">Comments</button>
            <button className="articles--sort--votes">Votes</button>
            <button onClick={handleClick}className="articles--sort--asc" value='asc'>ASC</button>
            <button className="articles--sort--desc">DESC</button>
        </section>
        <section>
            <ul className="articles--card_list">
                {articles.map(({article_id, title, author, topic, created_at, votes}) => {
                    return (
                        <li className="article--card" key={article_id}>
                            <h3 className="article--card--title">{title}</h3>
                            <h3 className="article--card--author">Author: {author}</h3>
                            <h3 className="article--card--topic">Topic: {topic}</h3>
                            <h3 className="article--card--created_at">Posted: {created_at.substring(0,10)}</h3>
                            <h3 className="article--card--votes">Votes: {votes === 0 ? "Be the first to upvote this!": votes}</h3>
                            <Link to={`/articles/${article_id}`}><button className="article--card--button">View</button></Link>
                        </li>
                    )
                })}
            </ul>
        </section>
        </>
    )
}

export default Articles