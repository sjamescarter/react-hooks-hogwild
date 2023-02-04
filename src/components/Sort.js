function Sort({ handler }) {
    return (
        <select onChange={handler}>
            <option value="none">Sort by:</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
        </select>
    )
}

export default Sort