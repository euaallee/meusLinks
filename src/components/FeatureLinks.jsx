export default function FeatureLinks(props) {
    return (
        <>
            <div className={props.className}>
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    <div>
                        <img src={props.urlIcon} alt={props.altIcon} />
                        <h3>{props.titleLink}</h3>
                    </div>
                    <img src="./assets/icon/arrow-right.svg" alt="Arrow Right" />
                </a>
            </div>
        </>
    )
}