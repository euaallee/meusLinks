export default function FeatureLinks(props) {
    return (
        <>
            <div
                style={{background: props.style === "#292929" ? "black" : "white",}}
                id={props.id} className={props.className}>
                <a style={{ color: props.style === "#292929" ? "white" : "#292929" }} href={props.link} target="_blank" rel="noopener noreferrer">
                    <div>
                        <img src={props.urlIcon} alt={props.altIcon} />
                        <h3>{props.titleLink}</h3>
                    </div>
                    <img id="arrow" src="/meusLinks/assets/icon/arrow-right.svg" alt="Arrow Right" style={{filter: props.style === "#292929" ? "invert()" : ""}} />
                </a>
            </div >
        </>
    )
}