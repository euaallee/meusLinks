export default function iconComponents(props) {
    return (
        <>
            <a href={props.linkIcon} target="_blank" rel="noopener noreferrer">
                <img className="iconHeader" src={props.urlIcon} alt={props.alt} />
            </a>
        </>
    )
}