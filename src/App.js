import Header from './Header'
import Post from './Post'
import { data } from './data.js'

export default function App() {
    const posts = data.map(post => {
        return <Post
            key={post.title}
            {...post}
        />
    })
    return (
        <div className='main-container'>
            <Header />
            <section className='posts-container'>
                {posts}
            </section>
        </div>
    )
}