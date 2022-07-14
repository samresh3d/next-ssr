import Head from 'next/head'
import Post from '../../components/Post/Post';
import styles from '../../styles/Home.module.css'
import type { PostType } from '../../components/Post/Post';

const SinglePost = ({ post }: {post: PostType}) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Single Posts</title>
        <meta name="description" content="Brushing Next and react concepts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Post post={post} />
      </main>
    </div>
  )
}


export async function getStaticPaths() {
  
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  const paths = posts.map((post:PostType) => ({
    params: { id: post.id.toString() },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({params}: any) {

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();

  return {
    props: {
      post: post
    },
  }
}
export default SinglePost


