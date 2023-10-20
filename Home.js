// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import './Home.css'
// import NewsArticle from '../../components/NewsArticle/NewsArticle'

// function Home(){

//    const [news, setNews] = useState([])
//    const [searchQuery, setSearchQuery] = useState("pune")

//    const loadNews = async () =>{
//       try{
//       const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2023-10-15&to=2023-
//       10-15&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`);
//       setNews(response.data.articles)
//    }
//      catch(error){
//     console.log(error)
//      }
//  }

//    useEffect(() => {
//          loadNews()
//    },[])


//   useEffect(()=>(
//     loadNews()
//   ), [searchQuery])

//     return(
//         <div>
//             <h1>News App</h1>
//             <input
//              type='text'
//              className='search-input'
//               value={searchQuery} 
//               onChange={(e)=>{
//                 setSearchQuery(e.target.value)
//               }} />


//             <div className='news-container'>
//            {
//             news.map((newsArticle, index)=>{
//                 const{author, title, description ,url, urlToImage, publishedAt} =newsArticle
//                 return(<NewsArticle  author={author} title={title} description={description} url={url}
//                 urlToImage={urlToImage} publishedAt={publishedAt}  key={index}/>)
//              })
//            }
            
//             </div>


//         </div>
//     )
// }
// export default Home()

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import NewsArticle from "../../components/NewsArticle/NewsArticle";


function Home() {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("pune");

  const loadNews = async () => {
    try {
      const response = await axios.get(`
      https://newsapi.org/v2/everything?q=${searchQuery}&from=2023-10-19&to=2023-10-19&sortBy=popularity&apiKey=f1566e305a9049499909f408258bee8a
      `);
      setNews(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  useEffect(() => {
    loadNews();
  }, [searchQuery]);
  return (
    <>
      <nav class="navbar navbar-dark bg-dark text-light">
        <h3 class="navbar-brand ms-3">News App</h3>
        <form class="form-inline">
          <input
            class="search-input"
            type="search"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            aria-label="Search"
          />
        </form>
      </nav>

      <div className="news-container mt-3">
        {news.map((newsArticles, index) => {
          const {
            author,
            title,
            description,
            url,
            urlToImage,
            publishedAt,
            content,
          } = newsArticles;
          return (
            <NewsArticle
              author={author}
              title={title}
              description={description}
              url={url}
              urlToImage={urlToImage}
              publishedAt={publishedAt}
              content={content}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;