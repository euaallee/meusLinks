export default function iconComponents(props) {
    return (
        <>
            <a id={props.id} href={props.linkIcon} target="_blank" rel="noopener noreferrer">
                <img style={{filter: props.style === "#292929" ? "invert()" : ""}} className="iconHeader" src={props.urlIcon} alt={props.alt} />
            </a>
        </>
    )
}