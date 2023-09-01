import React, { useEffect, useState } from 'react'


const Data = (props: any) => (
    <li>
        {props.record.name}
        <ul>
            <li>{props.record.location}</li>
        </ul>
    </li>
)

export default function ViewData() {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            const res = await fetch('http://localhost:9200/record');
            if(!res.ok) {
                console.error("error occured")
                return
            }
            const data = await res.json();
            setData(data);
        }

        getData();
        return;
    }, [data.length]);

    function mapData() {
        return data.map((d: any) => {
            return (
                <Data record={d} key={d._id} />
            )
        })
    }

  return (
    <ul className='view'>
        <h1>Data</h1>
      {mapData()}
    </ul>
  )
}
