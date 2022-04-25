import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import Container from '../components/container'

import { getAllPosts } from '../lib/posts'
import PostPreview from '../components/post-preview'
import PostType from '../types/post'

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'tags',
    'excerpt',
    'coverImage'
  ])

  return {
    props: {
      allPosts
    }
  }
}

type Props = {
  allPosts: PostType[]
}

const Index = ({ allPosts }: Props) => {
  return (
    <Layout>
      <Head>
        <title>{'Twugo\'s Blog'}</title>
      </Head>

      <Container>
        <main className={styles.main}>
          <h1 className={styles.title}>
            {'Welcome to Twugo\'s Blog!'}
          </h1>

          <p className={styles.description}>
            Engineering, Game, Poem
          </p>

          <section>
            {allPosts.map((post) => {
              return (
                <div key={post.slug}>
                  <PostPreview post={post} />
                  <br />
                </div>
              )
            })}
          </section>
        </main>
      </Container>
    </Layout>
  )
}

export default Index
