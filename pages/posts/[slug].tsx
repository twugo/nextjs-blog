import { useRouter } from "next/router";
import ErrorPage from 'next/error'
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import path from "path";

import Layout from "../../components/layout";
import markdownToHtml from "../../lib/markdownToHtml";
import { getAllPosts, getPostBySlug } from "../../lib/posts";
import PostType from "../../types/post";
import { Button, Grid } from "@mui/material";

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter()
  const baseUrl = {
    production: process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL,
    development: process.env.NEXT_PUBLIC_DEVELOPMENT_BASE_URL,
    test: process.env.NEXT_PUBLIC_DEVELOPMENT_BASE_URL
  }[process.env.NODE_ENV];

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <Grid container wrap="wrap" justifyContent="center" alignItems="center">
        <Grid item xs={8} zeroMinWidth>
          {router.isFallback ? (
            <h1>Loading...</h1>
          ) : (
            <>
              <Head>
                <title>{post.title} | {'Twugo\'s Blog'}</title>
                {baseUrl && post.ogImage &&
                  <meta property="og:image" content={path.join(baseUrl, post.ogImage.url)} />
                }
                {post.excerpt &&
                  <meta name="description" content={post.excerpt} />
                }
              </Head>
              {post.coverImage &&
                <Image
                  src={post.coverImage}
                  alt="image"
                  width="1280"
                  height="720"
                />
              }
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </>
          )}
          <Link href="/" passHref>
            <Button>◀戻る</Button>
          </Link>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Post

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])
  const paths = posts.map((post) => {
    return {
      params: {
        slug: post.slug
      }
    }
  })

  return { paths, fallback: false }
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'coverImage',
    'ogImage',
    'excerpt'
  ])

  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}
