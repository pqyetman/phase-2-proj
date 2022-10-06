import Stocks from "./Stocks.js"
import { useState } from "react";
import Image from 'react-bootstrap/Image'
import StockFilter from "./StockFilter.js"



function Home({userOne}) {

    const {firstname} = userOne;
 console.log(firstname)

    const [stockData, setStockData] = useState([])
    const [api, setAPI] = useState("")
    const [search, setSearch] = useState("")
 
    function submitAPI(e) {

        e.preventDefault();

        fetch(`https://financialmodelingprep.com/api/v3/available-traded/list?apikey=${api}`)
        .then(res => res.json())
        .then(data => setStockData(data))
       
    }

    
    function handleAPIInput(e){
        setAPI(e.target.value)
    }

    const firstKStock = stockData.slice(0,2000)
    const firstKMapStock = firstKStock.filter(stock => (stock.name.toLowerCase().includes(search.toLowerCase())))
    
    .map(stock => <Stocks api ={api} key = {stock.symbol} stock= {stock}/>)



   


    return (
        <div className="home">
            <h2>Hello, {firstname} Enter Your API Key</h2>         
            <form onSubmit={submitAPI}>
                <label className="form-label">API Key:</label>
                <input
                    type="text"
                    name="api"
                    onChange={handleAPIInput}
                    value={api}
                />
                <button type="submit" className="btn btn-primary">SubmitAPI</button>
            </form>            
            <Image style={{ width: 250, height: 175 }} fluid ="true" src ={"/hammerhead (1).gif"} />
            <h2>Select A Stock From The Board, {firstname}</h2>
            <StockFilter setSearch ={setSearch} search = {search} />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Stock Name</th>
                        <th scope="col">Symbol</th>
                        <th scope="col">Price</th>
                        <th scope="col">Exchange</th>
                        <th scope="col">Select</th>
                    </tr>
                </thead>
                <tbody>{firstKMapStock}</tbody>
            </table>
        </div>

    )
}

export default Home;