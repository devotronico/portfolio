import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
const Blog = ({ id, titolo, slug, categoria, date, descrizione, immagine }) => {
  return (
    <Link to={`/blogs/${slug}`} key={id} className="blog">
      <article className="blog">
        <Image fluid={immagine.childImageSharp.fluid} className="blog-img" />
        <div className="blog-card">
          <h4>{titolo}</h4>
          <p>{descrizione}</p>
          <div className="blog-footer">
            <p>{categoria}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

Blog.propTypes = {}

export default Blog
