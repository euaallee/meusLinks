import IconComponents from "./iconComponents"

const iconData = [
    {
        linkIcon: "https://twitter.com/allee_eu",
        urlIcon: "/meusLinks/assets/image/twitter.png",
        alt: "Icon do Twitter"
    },
    {
        linkIcon: "mailto:euaalleedev@gmail.com?subject=Enviado do Link Page&cc=alexanderjoshua2004@gmail.com&bcc=alexanderjoshua2004+linkpage@gmail.com&body=Olá, quero serviço!",
        urlIcon: "/meusLinks/assets/image/gmail.png",
        alt: "Icon do Gmail"
    },
    {
        linkIcon: "https://instagram.com/euaallee",
        urlIcon: "/meusLinks/assets/image/logotipo-do-instagram.png",
        alt: "icon do Instagram"
    },
    {
        linkIcon: "https://github.com/euaallee",
        urlIcon: "/meusLinks/assets/image/github.png",
        alt: "Icon do Github"
    },
    {
        linkIcon: "https://www.linkedin.com/in/euaallee-dev/",
        urlIcon: "/meusLinks/assets/image/linkedin.png",
        alt: "Icon do Linkedin"
    },
]

export default function Header(props) {
    return (
        <>
            <header>
                <img className="photo" src={props.urlImg} alt={props.alt} />
                <h2 style={{color: props.style === "#292929" ? "white" : "black"}}>{props.user}</h2>
                <p style={{color: props.style === "#292929" ? "rgb(255 255 255 / 84%)" : "#292929"}}>{props.description}</p>
                <div className="iconHeaderGruop">
                    {
                        iconData.map(function (item, index) {
                            return (
                                <IconComponents
                                    style={props.style}
                                    id={index}
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