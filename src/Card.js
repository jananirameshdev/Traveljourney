
function Card(props) {
    return (
        <>

            <div className="box">
                <img src={props.image_url} alt="image" className="images" />
                <img src="https://cdn1.iconfinder.com/data/icons/sns-emoji-ui-ux-line/512/iconset050_line_512-10-512.png" className="navi" />
                <div className="locate">
                    <span className="loc">{props.location}</span>
                    <div className="map">View on Google Maps</div>
                </div>
                <div className="card">
                    <div className="tit">
                        {props.title}
                    </div>
                    <div className="date">
                        {props.start_date}-{props.end_date}
                    </div>
                    <div className="content">
                        {props.description}
                    </div>
                </div>

            </div>
        </>
    )
}
export default Card;