import { useEffect, useState } from "react"
import { useParams, Link, useSearchParams } from "react-router-dom"
import { fetchArticles, fetchArticlesByTopic } from "../api functions/api"

const Articles = () => {

    const [articles, setArticles] = useState([])
    const {topic_id} = useParams();
    const [searchParams, setSearchParams] = useSearchParams({})
    const [sortby, setSortby] = useState('created_at')
    const [order, setOrder] = useState('desc')

    
    
    useEffect(() => {
        let sorted = searchParams.get('sortby')
        let ordered = searchParams.get('order')
        console.log(sorted, ordered);
        if (!topic_id) {
            fetchArticles(sorted, ordered).then((articlesFromApi) => {
                setArticles(articlesFromApi.data.articles)

            })
        } else {
            fetchArticlesByTopic(topic_id).then((articlesByTopicFromApi) => {
                setArticles(articlesByTopicFromApi.data.articles)
            })
        }
    }, [topic_id, searchParams])
    
    function handleSortOnClick(e) {
        setSearchParams({sortby: e.target.value, order: order}, {replace: true})
        setSortby(e.target.value)
    }
    
    function handleOrderOnClick(e) {
        setSearchParams({sortby: sortby, order: e.target.value},{replace: true})
        setOrder(e.target.value)
    }

    return (
        <>
        <section className="articles--sort">
            <p className="articles--sort--title">Sort by:</p>
            <button onClick={handleSortOnClick} className="articles--sort--date" value='created_at'>Date</button>
            <button onClick={handleSortOnClick}className="articles--sort--comments" value='comment_count'>Comments</button>
            <button onClick={handleSortOnClick} className="articles--sort--votes" value='votes'>Votes</button>
            <button onClick={handleOrderOnClick} className="articles--sort--asc" value='asc'>ASC</button>
            <button onClick={handleOrderOnClick} className="articles--sort--desc" value='desc'>DESC</button>
        </section>
        <section>
            <ul className="articles--card_list">
                {articles.map(({article_id, title, author, topic, created_at, votes, comment_count}) => {
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
                })}
            </ul>
        </section>
        </>
    )
}

export default Articles