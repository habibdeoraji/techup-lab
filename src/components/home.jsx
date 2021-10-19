import React, { useState, useEffect } from 'react';
import axios from "axios";
import ImageCard from './ImageCard';



const Home = () => {
    const [albumData, setAlbumData] = useState([])




    useEffect(() => {
        const getData = async () => {
            await axios.get('https://jsonplaceholder.typicode.com/photos')
                .then(res => {
                    console.log(res.data)
                    setAlbumData(res.data)
                })
                .catch(err => {
                    console.log(err)
                });
        }
        getData()
    }, [])


    return (<div style={{ display: "flex", flexWrap: "wrap", width: "90%", margin: "10px auto", justifyContent: "center" }}>
        <ImageCard albumData={albumData} />
    </div>);
}

export default Home;