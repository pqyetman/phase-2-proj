

function StockFilter({setSearch, search}) {

    

function handleSearch(e) {

    setSearch(e.target.value)
    console.log(search)
   
}

return(

    <div>
        <label className="form-label">Security Name:</label>
        <input
            type="text"
            name="searchbar"
            onChange={handleSearch}
            value={search}
        />
    </div>
)
}

export default StockFilter;