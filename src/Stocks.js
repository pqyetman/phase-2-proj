import OffCanvas from "./OffCanvas.js";

function Stocks({stock, api}) {

  const {symbol , name , price, exchangeShortName } = stock;


    return (
      <tr>
        <td>{name}</td>
        <td>{symbol}</td>
        <td>{price}</td>
        <td>{exchangeShortName}</td>
        <td>
          <OffCanvas api ={api} stock = {stock}/>
        </td>
      </tr>
    );
  }
  
  export default Stocks;