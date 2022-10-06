import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import OCBodyStock from "./OCBodyStock.js"

function OffCanvas({ stock, api }) {

  const { symbol, name } = stock;
  const [show, setShow] = useState(false);
  const [stockData, setStockData] = useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    fetch(`https://financialmodelingprep.com/api/v3/income-statement/${symbol}?limit=120&apikey=${api}`)
      .then(res => res.json())
      .then(data => setStockData(data))

  }; 

  const mappedStockData = stockData.map(stockbyyear => (<OCBodyStock key={stockbyyear.calendarYear} stockbyyear={stockbyyear}></OCBodyStock>))

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Show More
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {mappedStockData}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas