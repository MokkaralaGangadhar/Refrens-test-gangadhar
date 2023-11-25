import React, { useState,useEffect } from 'react'
import profileStyles from "./Profile.module.css"
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
const Profile = () => {
  const [profileData,setProfileData] = useState("")
  const [episodeInfo,setEpisodeInfo] = useState([])
  
  const param = useParams();
  useEffect(() => {
    if(param.pid){
      getProfileInfo(param.pid)
    }
  },[])
  const getProfileInfo = async (pid) => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/${pid}`);
  
      if (response.status === 200) {
        setProfileData(response.data);
  
        // Use Promise.all to wait for all episode requests to complete
        const episodesData = await Promise.all(
          response.data?.episode.map(async (item) => await getEpisodeInfo(item))
        );
        setEpisodeInfo(episodesData)
        // console.log("episodes_data", episodesData);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  const getEpisodeInfo = async (url) => {
    try {
      const response = await axios.get(url);
  
      if (response.status === 200) {
        return response?.data;
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <>
      <div className={profileStyles.profile_wraper}>
        <div className={profileStyles.profile_image}>
          <h1>{profileData?.name}</h1>
          <img src={profileData?.image} width={500} height={500} alt='Profile image' />
        </div>
        <div className={profileStyles.profile_details}>
          <div className={profileStyles.profile_personel_info}>
            <div>
              <h3>Personel Information</h3>
              <ul>
                <li>
                  <span className={profileStyles.profile_title}>Name</span>:
                  <span className={profileStyles.profile_type}>{profileData?.name}</span>
                </li>
                <li>
                  <span className={profileStyles.profile_title}>Gender</span>:
                  <span className={profileStyles.profile_type}>{profileData?.gender}</span>
                </li>
                <li>
                  <span className={profileStyles.profile_title}>Status</span>:
                  <span className={profileStyles.profile_type}>{profileData?.status}</span>
                </li>
                <li>
                  <span className={profileStyles.profile_title} >Species</span>:
                  <span className={profileStyles.profile_type}>{profileData?.species}</span>
                </li>
              </ul>
            </div>
            <div>
            {/* /name, dimension, amount of residents, etc */}
            <h3>Origin & Location Details</h3>
            <ul>
              <li>
                <span className={profileStyles.profile_title}>Origin</span>:<span className={profileStyles.profile_type}>{profileData?.origin?.name}</span>
              </li>
              <li>
                <span className={profileStyles.profile_title}>Location</span>:<span className={profileStyles.profile_type}>{profileData?.location?.name}</span>
              </li>
              
            </ul>
          </div>
          </div>
          <div>
          <h2>Featured Episodes</h2>
          <div className={profileStyles.episodes_wraper}>
            {episodeInfo.length > 0 && episodeInfo.map((item) =>{
              return(
                <div className={profileStyles.episode_info}>
                  {/* <p>{item?.name}</p> */}
                  <Link to={`/episode-detail/${item.id}`}>
                    <p>{item.episode}</p>
                  </Link>
                </div>
              )
            })}
                {/* <div className={profileStyles.episode_info}>
                  <p><span className={profileStyles.profile_title}>Episode Title</span>:<span className={profileStyles.profile_type}>Edge of Tomorty: Rick, Die, Rickpeat</span></p>
                  <p><span className={profileStyles.profile_title}>Release Date</span>:<span className={profileStyles.profile_type}>November 10, 2019</span>&nbsp;<span className={profileStyles.profile_type}>S04E01</span></p>
                </div>
            
                <div className={profileStyles.episode_info}>
                  <p><span className={profileStyles.profile_title}>Episode Title</span>:<span className={profileStyles.profile_type}>Edge of Tomorty: Rick, Die, Rickpeat</span></p>
                  <p><span className={profileStyles.profile_title}>Release Date</span>:<span className={profileStyles.profile_type}>November 10, 2019</span>&nbsp;<span className={profileStyles.profile_type}>S04E01</span></p>
                </div>
                <div className={profileStyles.episode_info}>
                  <p><span className={profileStyles.profile_title}>Episode Title</span>:<span className={profileStyles.profile_type}>Edge of Tomorty: Rick, Die, Rickpeat</span></p>
                  <p><span className={profileStyles.profile_title}>Release Date</span>:<span className={profileStyles.profile_type}>November 10, 2019</span>&nbsp;<span className={profileStyles.profile_type}>S04E01</span></p>
                </div>
            
                <div className={profileStyles.episode_info}>
                  <p><span className={profileStyles.profile_title}>Episode Title</span>:<span className={profileStyles.profile_type}>Edge of Tomorty: Rick, Die, Rickpeat</span></p>
                  <p><span className={profileStyles.profile_title}>Release Date</span>:<span className={profileStyles.profile_type}>November 10, 2019</span>&nbsp;<span className={profileStyles.profile_type}>S04E01</span></p>
                </div> */}
          </div>
         </div>
        </div>
      </div>
    </>
  )
}

export default Profile