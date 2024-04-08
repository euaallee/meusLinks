import Header from './components/Header'
import Section from './components/Section'
import FeatureLinks from './components/FeatureLinks'
import './App.css'

const featureLinksData = [
  {
    link: "https://euaallee.github.io/",
    titleLink: "My Website",
    urlIcon: "./assets/icon/WebSiite.svg",
    alt: "WebSite Icon",
  },
  {
    titleLink: "Visual Ideas",
    urlIcon: "./assets/icon/Idea.svg",
    alt: "Visual Ideas Icon",
  },
  {
    titleLink: "Newsletter",
    urlIcon: "./assets/icon/Newsletter.svg",
    alt: "Newsletter Icon",
  },
  {
    titleLink: "Shop",
    urlIcon: "./assets/icon/shop.svg",
    alt: "Shop Icon",
  },
  {
    titleLink: "What I'm Doing Now",
    urlIcon: "./assets/icon/clock.svg",
    alt: "Clock Icon",
  }
]

const otherLinksData = [
  {
    titleLink: "Blog",
    urlIcon: "./assets/icon/Pen.svg",
    alt: "Blog Icon",
  },
  {
    titleLink: "Book Notes",
    urlIcon: "./assets/icon/Books.svg",
    alt: "Book Notes Icon",
  },
  {
    titleLink: "Notion Products",
    urlIcon: "./assets/icon/Store.svg",
    alt: "Notion Products Icon",
  },
  {
    titleLink: "Blender Store",
    urlIcon: "./assets/icon/3D.svg",
    alt: "Blender Store Icon",
  },
]

export default function App() {
  return (
    <>
      <main>
        <Header
          urlImg="https://github.com/euaallee.png"
          alt="Foto de Alexander"
          user="euaallee dev"
          description="A UI/UX designer who loves Coding, Illustrating & creating 3D stuff"
        />

        <Section
          title="Featured Links"
          className="groupLink"
        >
          {
            featureLinksData.map(function (item) {
              return (
                <FeatureLinks
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
          title="Other Links"
          className="groupLink"
        >
          {
            otherLinksData.map(function (item) {
              return (
                <FeatureLinks
                  titleLink={item.titleLink}
                  urlIcon={item.urlIcon}
                  alt={item.alt}
                  className="link"
                />
              )
            })
          }
        </Section>

        <footer><h2>Made with ❤️ by </h2></footer>
      </main >
    </>
  )
}
