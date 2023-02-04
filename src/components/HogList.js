import { useState } from "react"
import HogCard from "./HogCard";

function HogList({ hogs, greased, sortBy }) {
    const [selected, setSelected] = useState("")

    function handleSelect(name){
        if(name === selected){
            setSelected("")
        } else {
            setSelected(name)
        }
    }

    const greaseFilter = hogs.filter((hog) => hog.greased === greased);
    const hogsFilter = greased ? greaseFilter : hogs;
    const sortByFilter = sortBy === "weight" 
        ? [...hogsFilter].sort((a, b) => b[sortBy] - a[sortBy])
        : sortBy === "name" 
            ? [...hogsFilter].sort((a, b) => {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                return -1;
                }
                if (nameA > nameB) {
                return 1;
                }
                return 0;
            })
            : hogsFilter; 


    const displayHogs = sortByFilter.map((hog) => {
        return <HogCard 
            key={hog.name}
            name={hog.name} 
            image={hog.image} 
            specialty={hog.specialty} 
            weight={hog.weight} 
            medal={hog["highest medal achieved"]} 
            greased={hog.greased}
            selected={selected}
            handleSelect={handleSelect}
        />
    })

    return <div className="ui three column grid">{displayHogs}</div>;
}

export default HogList