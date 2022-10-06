import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react';

function OCBodyStock({ stockbyyear }) {

    const { calendarYear, revenue, operatingIncome, grossProfit, eps } = stockbyyear



    return (
        <div>
            <ListGroup>
                <ListGroup.Item >
                    Year: {calendarYear}</ListGroup.Item>

                <ListGroup.Item variant={eps < 0 ? "danger" : "success"}>
                    Earnings Per Share: {eps}</ListGroup.Item>

                <ListGroup.Item variant={revenue < 0 ? "danger" : "success"} >
                    Revenue: ${revenue}</ListGroup.Item>

                <ListGroup.Item variant={operatingIncome < 0 ? "danger" : "success"} >
                    Operating Income: ${operatingIncome}</ListGroup.Item>

                <ListGroup.Item variant={grossProfit < 0 ? "danger" : "success"}>
                    Gross Profit: ${grossProfit}</ListGroup.Item>
            </ListGroup>
        </div>

    )

}

export default OCBodyStock