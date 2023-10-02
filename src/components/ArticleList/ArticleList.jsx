import data from '../../../articles.json'
import Article from '../Article/Article'

const ArticleList = () => {
    return <div className="mt-5 sm:mt-0 grid gap-5 m-auto max-w-6xl sm:grid-cols-2 lg:grid-cols-3  px-5">
        {
            data.map((article, index) => <Article key={index} {...article} />)
            
            // <Article/>
        }
    </div>
}

export default ArticleList