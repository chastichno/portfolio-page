import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { Link, graphql, useStaticQuery } from "gatsby"

const BlogPage = () => {

  const data = useStaticQuery(graphql`
query {
  allContentfulBlogPost (
    sort: {
      fields:publishedDate,
      order:DESC
    }
  ) {
    edges {
      node {
        title
        slug
        publishedDate(formatString:"MMMM Do, YYYY")
      }
    }
  }
}
`);

  //Markdown
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //         edges {
  //         node {
  //             frontmatter {
  //             title
  //             date
  //             }
  //             fields {
  //                 slug
  //             }
  //         }
  //         }
  //     }
  //   }
  // `);

  //OLD
  // let posts = [];
  // for (var i = 0; i < data.allMarkdownRemark.edges.length; i++) {
  //     posts.push({
  //         "id": i,
  //         "title": data.allMarkdownRemark.edges[i].node.frontmatter.title,
  //         "date": data.allMarkdownRemark.edges[i].node.frontmatter.date
  //     });
  // };
  // const Test = ({ posts }) => (
  //     posts.map(post => (
  //         <li className="post" key={post.id}>
  //             <div className="post-title">{post.title}</div>
  //             <div className="post-date">{post.date}</div>
  //         </li>
  //     ))
  // );

  return (
    <Layout>
      <Head title="Blog" />
      <div className="blog container">
        <h1><b>Blog</b></h1>
        <ol className="blog__posts">
          {/* <Test posts="posts" /> */}
          {data.allContentfulBlogPost.edges.map((edge) => {
            return (
              <li className="blog__post" key={edge.node.slug}>
                <Link to={"/blog/" + edge.node.slug}>
                  <h2>{edge.node.title}</h2>
                  <p>{edge.node.publishedDate}</p>
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogPage