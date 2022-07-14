import Head from 'next/head'
import User, { UserType } from '../components/User/User';
import { GetServerSideProps } from 'next'
import styles from '../styles/Home.module.css'

const Users = ({ users }: { users: Array<UserType> }) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>All Users</title>
        <meta name="description" content="Brushing Next and react concepts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.users}>
        {users.map((user, index) => <User key={`key-${index}`} user={user} />)}
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export async function getServerSideProps() {

  const res = await fetch('https://randomuser.me/api/?results=25&inc=name,gender,dob&noinfo');
  const users = await res.json();

  return {
    props: {
      users: users.results,
    },
  }
}
export default Users


