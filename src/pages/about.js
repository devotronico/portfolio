import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
// ...GatsbyImageSharpFluid
const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const { titolo, stack, informazioni, immagine } = nodes[0]
  return (
    <Layout>
      <section className="about-page">
        <div className="section-center about-center">
          {immagine && (
            <Image
              fluid={immagine.childImageSharp.fluid}
              className="about-img"
            />
          )}
          <article className="about-text">
            <Title title={titolo} />
            <p>{informazioni}</p>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.titolo}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        titolo
        informazioni
        immagine {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          titolo
          id
        }
      }
    }
  }
`

export default About
