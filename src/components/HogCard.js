function HogCard({ name, image, specialty, weight, medal, greased, selected, handleSelect }) {    
    return (
        <div className="column" onClick={() => handleSelect(name)}>
            <div className="ui fluid card pigTile ui link cards">
                <div className="image">
                    <img src={image} alt={`A pic of ${name}`} />
                </div>
                <div className="content">
                    <h3 className="header">{name}</h3>
                </div>
                <div>{selected === name ? 
                        <div className="description">
                            Weight: {weight} lbs
                            <br></br>
                            Specialty: {specialty}
                            <br></br>
                            Highest Medal Achieved: <span className="achievementText">{medal}</span>
                            <br></br>
                            {greased ? "Greased" : "Not Greased"}
                        </div>
                        : null }
                 </div>
            </div>
        </div>
    )
}

export default HogCard