import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function StockPage() {
    const [data, setData] = useState();
    let output = []

    const { stockTicker } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/api/stock/${stockTicker}`).then((res) => res.json().then((json_data) =>
            setData(json_data)
        )
        );
    }, []);
    if (data != undefined) {
        let list_items = []
        for (let a in data) {
            if (a == "sector_key") {
                list_items.push(<ListGroup.Item><strong>{a}: </strong> <Link to={`/sectors/${data[a]}`}> {data[a]} </Link></ListGroup.Item>)
            } else {
                if (a !== "ticker" && a !== "last_30_days_prices") {
                    list_items.push(<ListGroup.Item><strong>{a}: </strong>{data[a]}</ListGroup.Item>)
                }
            }

        }
        output.push(
            <Container>
                <h1>{data.ticker}</h1>
                <ListGroup>
                    {list_items}
                </ListGroup>
            </Container>
        )

    }
    return (
        <div className="pt-5">
            {output}
        </div>
    );
}

export default StockPage;