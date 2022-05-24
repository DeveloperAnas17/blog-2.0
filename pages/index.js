import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { GraphQLClient, gql } from "graphql-request";
import { useState } from "react";
import BlogCard from "../components/BlogCard";

const graphcms = new GraphQLClient(
  "https://api-ap-south-1.graphcms.com/v2/cl3js2me28eaf01xp0maa5d9d/master"
);

const QUERY = gql`
  {
    posts {
      id
      title
      datePublished
      slug
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverphoto {
        url
      }
    }
  }
`;
// coverPhoto {
//   url
// }
export default function Home({ posts }) {
  console.log(posts);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {posts.map((post) => (
          <BlogCard
            title={post.title}
            author={post.author}
            coverPhoto={post.coverphoto}
            key={post.id}
            datePublished={post.datePublished}
            slug={post.slug}
            avatar={post.avatar}
          />
        ))}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}
