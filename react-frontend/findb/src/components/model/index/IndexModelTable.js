import Table from 'react-bootstrap/Table';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function IndexModelTable() {
    const [data, setData] = useState([]);
    let modelEntries = [];
    let modelHeaders = [];
    useEffect(() => {
        fetch("http://localhost:5000/api/index/").then((res) => res.json().then((json_data) =>
            setData(json_data)
        )
        );
    }, []);
    if(data.length != 0) {
        modelHeaders = Object.keys(data[0]).reverse().map((h) => <th>{h}</th>)
        for(let i = 0; i < data.length; i++) {
            let th_eles = []
            let arr = Object.keys(data[i]).reverse()
            for(let j = 0; j < arr.length; j++) {
                if(arr[j] === "ticker"){
                    th_eles.push(<td><Link  to={`/indexes/${data[i][arr[j]]}`}>{data[i][arr[j]]}</Link></td>)
                } else {
                    th_eles.push(<td>{data[i][arr[j]]}</td>)
                }
            }
            modelEntries.push(<tr>
                <td>{i}</td>
                {th_eles}
            </tr>)

        }
    }
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    {modelHeaders}
                </tr>
            </thead>
            <tbody>
               {modelEntries}
            </tbody>
        </Table>
    );
}

export default IndexModelTable;