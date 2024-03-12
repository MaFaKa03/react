function EventCard(props) {
    return (
        <div className="main">
            <div className="title">Название меропрития: {props.title}</div>
            <div className="date">Дата проведения: {props.date}</div>
            <div className="location">Место проведения: { props.location}</div>
        </div>


    );
}

export default EventCard;