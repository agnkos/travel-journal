export default function Post(props) {
    return (
        <div className="post">
            <img src={props.imageUrl} className="post-image" alt={props.title} />
        
                <p className="post-location">
                    <span><i class="fa-sharp fa-solid fa-location-dot"></i></span>
                    <span className="post-location-country">{props.location}</span>
                    <span><a href={props.googleMapsUrl} target='_blank' className="post-location-link">View on Google Maps</a></span>
                </p>
                <h1 className="post-title">{props.title}</h1>
                <p className="post-date">
                    <span>{props.startDate} - </span><span>{props.endDate}</span>
                </p>
                <p className="post-description">{props.description}</p>
            
        </div>
    )
}