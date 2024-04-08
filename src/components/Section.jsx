export default function Section(props) {
    return (
        <>
            <section>
                <p>{props.title}</p>
                <div className={props.className}>{props.children}</div>
            </section>
        </>
    )
}