import Head from 'next/head'
import Post from '../components/Post/Post';
import styles from '../styles/Home.module.css'
import type { PostType } from '../components/Post/Post';

const AllPost = ({ posts }: { posts: Array<PostType> }) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="Brushing Next and react concepts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {posts.map((post, index) => <Post key={`key-${index}`} post={post} />)}
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export async function getStaticProps() {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  }
}
export default AllPost


