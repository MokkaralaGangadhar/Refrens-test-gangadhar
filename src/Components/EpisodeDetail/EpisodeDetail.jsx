import React, { useEffect, useState } from 'react'
import EpisodeStyles from "./episode.module.css"
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Card } from '../Home/Card';
import homeStyles from "../Home/homestyles.module.css"
const EpisodeDetail = () => {
    const [episodeData,setEpisodeData] = useState([]);
    const [charactersInfo,setChactersInfo] = useState([])
    const param = useParams();
    useEffect(() =>{
        if(param.eid){
            getEpisodeInfo(param.eid)
          }
    },[])
    const getEpisodeInfo = async (eid) => {
        try {
          const response = await axios.get(`https://rickandmortyapi.com/api/episode/${eid}`);
      
          if (response.status === 200) {
            console.log("episode",response.data)
            setEpisodeData(response.data)
            const charactersData = await Promise.all(
              response.data?.characters.map(async (item) => await getCharactersInfo(item))
            );
            setChactersInfo(charactersData)
          }
        } catch (error) {
          console.error(error);
        }
      };
      const getCharactersInfo = async(url) => {
        try {
            const response = await axios.get(url);
        
            if (response.status === 200) {
              return response?.data;
            }
          } catch (error) {
            console.error(error);
          }
      }
  return (
    <>
    <div className={EpisodeStyles.episodeWraper}>
        <h1>Episode Detail</h1>
        <div>
            <p>{episodeData.episode}</p>
            <h2>{episodeData.name}</h2>
            <p>{episodeData.air_date}</p>
        </div>
        <h1>All Characters of {episodeData.name} </h1>
        <div className={EpisodeStyles.card_wraper}>
            {
                charactersInfo && charactersInfo.map((item)=>{
                    return(
                        <Card  key={item.id}
                        styles={homeStyles}
                        profileImg={item?.image}
                        profileName={item?.name}
                        pid={item.id}/>
                    )
                })
            }
        </div>
    </div>
    </>
  )
}

export default EpisodeDetail