import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './spinner.js'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(true);
    const [totalResults, settotalResults] = useState(0);
    const [page, setpage] = useState(1);
    

    const capitalize = (element) => {
        let d = element.toLowerCase();
        return d.charAt(0).toUpperCase() + d.slice(1);
    }
    useEffect(() => {
        document.title = `${capitalize(props.category)} - DailyDose`
        update();
    }, []);
    const update = async () => {
        props.setprogress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pageSize}`;
        setloading(true);
        let data = await fetch(url);
        props.setprogress(30);
        let parseddata = await data.json();
        props.setprogress(70);
        setarticles(parseddata.articles);
        setloading(false);
        settotalResults(parseddata.totalResults)
        props.setprogress(100);
    }
    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pagesize=${props.pageSize}`;
        setpage(page + 1)
        let data = await fetch(url);
        let parseddata = await data.json();
        setarticles(articles.concat(parseddata.articles));
        settotalResults(parseddata.totalResults);
    };
    return (
        <div className='my-3'>
            <h1 className="text-center" style={{ margin: '35px 0px',marginTop:'70px' }}>Top {capitalize(props.category)} Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container my-3">
                    <div className="row" >
                        {!loading && articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <Newsitem title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </div >
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: '8',
    category: "general"
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News
