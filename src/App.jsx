import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Section from './components/Section'
import FeatureLinks from './components/FeatureLinks'
import './App.css'

const featureLinksData = [
  {
    link: "https://euaallee.github.io/",
    titleLink: "Meu portifólio",
    urlIcon: "/meusLinks/assets/icon/WebSiite.svg",
    alt: "WebSite Icon",
  },
  {
    link: "https://pin.it/2VX4JwoCw",
    titleLink: "Imagens interessantes",
    urlIcon: "/meusLinks/assets/icon/Idea.svg",
    alt: "Visual Ideas Icon",
  },
  {
    link: "/meusLinks/public/CURRÍCULO.pdf",
    titleLink: "Meu Currículo",
    urlIcon: "/meusLinks/assets/icon/Pen.svg",
    alt: "Newsletter Icon",
  },
]

const otherLinksData = [
  {
    link: "https://www.magazinevoce.com.br/jpstorebuy",
    titleLink: "Loja JpStoreBuy",
    urlIcon: "/meusLinks/assets/icon/Store.svg",
    alt: "Blog Icon",
  },
  {
    link: "https://www.magazinevoce.com.br/magazinealexastores",
    titleLink: "Loja AlexaStore",
    urlIcon: "/meusLinks/assets/icon/Store.svg",
    alt: "Book Notes Icon",
  },
  {
    link: "https://mycollection.shop/alexa_stores",
    titleLink: "Shoppe alexa_stores",
    urlIcon: "/meusLinks/assets/icon/Store.svg",
    alt: "Notion Products Icon",
  },
  {
    link: "https://wa.me/c/558781712526",
    titleLink: "MDV Bookstore",
    urlIcon: "/meusLinks/assets/icon/Books.svg",
    alt: "Blender Store Icon",
  },
]

export default function App() {
  const [theme, setTheme] = useState("white")

  const toggleTheme = () => {
    const newTheme = theme === "white" ? "#292929" : "white"
    setTheme(newTheme)
  }

  return (
    <>
      <main style={{ backgroundColor: theme }}>
        <button style={{background: theme === "#292929" ? "white" : "black", color: theme === "#292929" ? "black" : "white" }} onClick={toggleTheme}>{theme === "#292929" ? "dark" : "light"}</button>
        <Header
          style={theme}
          urlImg="https://github.com/euaallee.png"
          alt="Foto de Alexander"
          user="euaallee dev"
          description="Um desenvolvedor que gosta de programar & adora café ☕."
        />

        <Section
          style={theme}
          id="linkF"
          title="LINKS EM DESTAQUE"
          className="groupLink"
        >
          {
            featureLinksData.map(function (item, index) {
              return (
                <FeatureLinks
                  style={theme}
                  id={index}
                  link={item.link}
                  titleLink={item.titleLink}
                  urlIcon={item.urlIcon}
                  alt={item.alt}
                  className="link"
                />
              )
            })
          }
        </Section>

        <Section
          style={theme}
          id="LinksO"
          title="OUTROS LINKS"
          className="groupLink"
        >
          {
            otherLinksData.map(function (item, index) {
              return (
                <FeatureLinks
                  style={theme}
                  id={index}
                  link={item.link}
                  titleLink={item.titleLink}
                  urlIcon={item.urlIcon}
                  alt={item.alt}
                  className="link"
                />
              )
            })
          }
        </Section>

        <footer><h2 style={{ color: theme === "#292929" ? "rgb(255 255 255 / 84%)" : "#292929" }}>Feito com ❤️ por </h2></footer>
      </main >
    </>
  )
}
