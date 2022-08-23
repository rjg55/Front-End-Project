import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { fetchTopics } from "../api functions/api"

const Topics = () => {

    const [topics, setTopics] = useState([])

    useEffect(() => {
        fetchTopics().then((topicsFromApi) => {
            setTopics(topicsFromApi.data.topics)
        })
    }, [])

    return (
        <>
        <div>
            <section className="topics--location_header"><Link to="/">Home</Link> {">>"} Topics</section>
            <nav className="topics--card_list">
                {topics.map(({slug, description}) => {
                    return (
                        <Link to={`/topics/${slug}`} key={slug} className="topics--card">
                            <h2 className="topics--card--title">{slug}</h2>
                            {/* <p className="topics--card--desc">{description}</p> */}
                           
                        </Link>
                    )
                })}
            </nav>
        </div>
        </>
    )
}

export default Topics