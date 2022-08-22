import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchArticles, fetchArticlesByTopic } from "../api functions/api"

const Articles = () => {

    const [articles, setArticles] = useState([])
    const {topic_id} = useParams();
    console.log(topic_id);

    useEffect(() => {
    if (!topic_id) {
            fetchArticles().then((articlesFromApi) => {
                setArticles(articlesFromApi.data.articles)
            })
        } else {
            fetchArticlesByTopic(topic_id).then((articlesByTopicFromApi) => {
                setArticles(articlesByTopicFromApi.data.articles)
            })
        }
    }, [topic_id])


    return (
        <>
        <section>
            <ul className="articles--card_list">
                {articles.map(({article_id, title, author, topic, created_at, votes}) => {
                    return (
                        <li className="article--card" key={article_id}>
                            <h3 className="article--card--title">{title}</h3>
                            <h3 className="article--card--author">Author: {author}</h3>
                            <h3 className="article--card--topic">Topic: {topic}</h3>
                            <h3 className="article--card--created_at">Posted: {created_at.substring(11, 16)} on {created_at.substring(0,10)}</h3>
                            <h3 className="article--card--votes">Votes: {votes === 0 ? "Be the first to upvote this!": votes}</h3>
                        </li>
                    )
                })}
            </ul>
        </section>
        </>
    )
}

export default Articles