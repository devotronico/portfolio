import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data
  return (
    <Layout>
      <Hero />
      <Services />
      <Projects projects={projects} title="featured projects" showLink />
      <Blogs blogs={blogs} title="ultimi articoli" showLink />
      <Jobs />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { in_evidenza: { eq: true } }) {
      nodes {
        id
        github
        strapiId
        titolo
        url
        descrizione
        immagine {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          titolo
        }
      }
    }
    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        id
        titolo
        slug
        categoria
        date(formatString: "D MMMM YYYY", locale: "IT")
        descrizione
        immagine {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
