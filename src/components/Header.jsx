import IconComponents from "./iconComponents"

const iconData = [
    {
        linkIcon: "https://twitter.com/allee_eu",
        urlIcon: "./assets/image/twitter.png",
        alt: "Icon do Twitter"
    },
    {
        linkIcon: "mailto:euaalleedev@gmail.com?subject=Enviado do Link Page&cc=alexanderjoshua2004@gmail.com&bcc=alexanderjoshua2004+linkpage@gmail.com&body=Olá, quero serviço!",
        urlIcon: "./assets/image/gmail.png",
        alt: "Icon do Gmail"
    },
    {
        linkIcon: "https://instagram.com/euaallee",
        urlIcon: "./assets/image/logotipo-do-instagram.png",
        alt: "icon do Instagram"
    },
    {
        linkIcon: "https://github.com/euaallee",
        urlIcon: "./assets/image/github.png",
        alt: "Icon do Github"
    },
    {
        linkIcon: "https://www.linkedin.com/in/euaallee-dev/",
        urlIcon: "./assets/image/linkedin.png",
        alt: "Icon do Linkedin"
    },
]

export default function Header(props) {
    return (
        <>
            <header>
                <img className="photo" src={props.urlImg} alt={props.alt} />
                <h2>{props.user}</h2>
                <p>{props.description}</p>
                <div className="iconHeaderGruop">
                    {
                        iconData.map(function (item) {
                            return (
                                <IconComponents
                                    linkIcon={item.linkIcon}
                                    urlIcon={item.urlIcon}
                                    alt={item.alt}
                                />
                            )
                        })
                    }
                </div>
            </header>
        </>
    )
}