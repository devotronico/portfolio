import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>form di contatto</h3>
          <form action="https://formspree.io/f/xzbkonlj" method="post">
            <div className="form-group">
              <input
                type="text"
                name="nome"
                placeholder="nome"
                className="form-control"
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="messaggio"
                row="5"
                placeholder="messaggio"
                className="form-control"
              ></textarea>
              <button type="submit" className="submit-btn btn">
                invia
              </button>
            </div>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
