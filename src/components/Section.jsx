export default function Section(props) {
    return (
        <>
            <section>
                <p style={{color: props.style === "#292929" ? "rgb(255 255 255 / 84%)" : "#292929"}}>{props.title}</p>
                <div className={props.className}>{props.children}</div>
            </section>
        </>
    )
}