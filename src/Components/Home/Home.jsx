import React, { useEffect, useState } from "react";
import homeStyles from "./homestyles.module.css";
import { Card } from "./Card";
import axios from "axios";
import { useNavigate, createSearchParams, useLocation } from "react-router-dom";
import FilterCharacters from "../Filter/FilterCharacters";
const Home = () => {
  const [page, setPage] = useState(1);
  const [characterData, setCharactersData] = useState("");
  const [totalItems, setTotalItems] = useState("");
  const [charCount, setCharCount] = useState("");
  const [isBottom, setIsBottom] = useState(false);
  const [totalPage, setTotalPage] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchEpisode, setSearchEpisode] = useState("");
  const [SpicesList, setSpicesList] = useState([]);
  const [StatusList, setStatusList] = useState([]);
  const [genderList, setgenderList] = useState([]);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const getCharactersInfo = async () => {
    const responce = await axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`, {
        params: {
          status: StatusList,
          species: SpicesList,
          gender: genderList.length > 0 ? genderList[0] : null,
        },
      })
      .then((response) => {
        console.log("Character Details", response);
        if (response.status == 200) {
          console.log("Character Details", response);
          let list = response?.data?.results;
          setTotalItems(response?.data?.info?.count);
          setTotalPage(response?.data?.info?.pages);
          if (charCount == 0) {
            setCharCount(response?.data?.results?.length);
            setCharactersData(response.data.results);
          } else {
            console.log("john", ...characterData, ...response?.data?.results);

            setCharCount(charCount + response?.data?.results?.length);
            setCharactersData([...characterData, ...response?.data?.results]);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    const queryParams = {};
    for (const param of searchParams.keys()) {
      const value = searchParams.get(param);
      queryParams[param] = decodeURIComponent(value);
    }
    console.log(queryParams);
    if (queryParams) {
        if (queryParams.selected_status) {
          var statusListData = JSON.parse(queryParams.selected_status);
          statusListData?.map((item) => {
            if (!StatusList.includes(item)) {
              StatusList.push(item);
            }
          });
        }
        if (queryParams.selected_species) {
          var statusListData = JSON.parse(queryParams.selected_species);
          statusListData?.map((item) => {
            if (!SpicesList.includes(item)) {
              SpicesList.push(item);
            }
          });
        }
        if(queryParams.selected_gender){
          var statusListData = JSON.parse(queryParams.selected_gender);
          statusListData?.map((item) => {
            if (!genderList.includes(item)) {
              genderList.push(item);
            }
          });
        }
      }

    getCharactersInfo();
  }, []);
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    const queryParams = {};
    for (const param of searchParams.keys()) {
      const value = searchParams.get(param);
      queryParams[param] = decodeURIComponent(value);
    }
    console.log(queryParams);
    if (queryParams) {
        if (queryParams.selected_status) {
          var statusListData = JSON.parse(queryParams.selected_status);
          statusListData?.map((item) => {
            if (!StatusList.includes(item)) {
              StatusList.push(item);
            }
          });
        }
        if (queryParams.selected_species) {
          var statusListData = JSON.parse(queryParams.selected_species);
          statusListData?.map((item) => {
            if (!SpicesList.includes(item)) {
              SpicesList.push(item);
            }
          });
        }
        if(queryParams.selected_gender){
          var statusListData = JSON.parse(queryParams.selected_gender);
          statusListData?.map((item) => {
            if (!genderList.includes(item)) {
              genderList.push(item);
            }
          });
        }
      }

    getCharactersInfo();
  }, [count]);
  //function call for pagination  when scroll to bottom of page
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      const windowHeight = window.innerHeight;
      if (scrollTop + windowHeight >= scrollHeight - 10) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isBottom) {
      // Call your function here
      setPage(page + 1);
    }
  }, [isBottom]);
  useEffect(() => {
    if (page <= totalPage) {
      getCharactersInfo();
    }
  }, [page]);
  //   filter status
  const checkCharStatus = (text) => {
    let checkedCheckboxStatus = false;
    if (StatusList && StatusList.length > 0) {
      if (StatusList.includes(text.toString())) {
        checkedCheckboxStatus = true;
      }
    }

    return checkedCheckboxStatus;
  };

  const getStatusFilter = async (e) => {
    const { value, checked } = e.target;
    if (checked) {
      if (StatusList.length > 0) {
        StatusList.pop();
        StatusList.push(value.toString());
      } else {
        StatusList.push(value.toString());
      }
    }
    console.log("updated Status", StatusList);
    setFilteredData();
  };
  //   filter Species
  const checkCharSpecies = (text) => {
    let checkedCheckboxStatus = false;
    if (SpicesList && SpicesList.length > 0) {
      if (SpicesList.includes(text.toString())) {
        checkedCheckboxStatus = true;
      }
    }

    return checkedCheckboxStatus;
  };

  const getSpeciesFilter = async (e) => {
    const { value, checked } = e.target;
    if (checked) {
      if (SpicesList.length > 0) {
        SpicesList.pop();
        SpicesList.push(value.toString());
      } else {
        SpicesList.push(value.toString());
      }
    }
    console.log("updated Species", SpicesList);
    setFilteredData();
  };

  //   filter Species
  const checkCharGender = (text) => {
    let checkedCheckboxStatus = false;
    if (genderList && genderList.length > 0) {
      if (genderList.includes(text.toString())) {
        checkedCheckboxStatus = true;
      }
    }

    return checkedCheckboxStatus;
  };

  const getGenderFilter = async (e) => {
    const { value, checked } = e.target;
    if (checked) {
      if (genderList.length > 0) {
        genderList.pop();
        genderList.push(value.toString());
      } else {
        genderList.push(value.toString());
      }
    }
    console.log("updated Species", genderList);
    setFilteredData();
  };
  const setFilteredData = () => {
    var statusQuery = StatusList.length > 0 ? StatusList : "";
    var speciesQuery = SpicesList.length > 0 ? SpicesList : "";
    var genderQuery = genderList.length > 0 ? genderList : "";
    const list = {};
    if (statusQuery) {
      list["selected_status"] = JSON.stringify(statusQuery);
    }
    if (speciesQuery) {
      list["selected_species"] = JSON.stringify(speciesQuery);
    }
    if (genderQuery) {
      list["selected_gender"] = JSON.stringify(genderList);
    }
    const options = {
      pathname: location.pathname,
      search: `?${createSearchParams(list)}`,
    };
    navigate(options, { replace: true });
    setCount(count + 1);
    setCharCount(0);
    setPage(1);
  };
const allClearFilter =() =>{
  setSpicesList([]);
  setStatusList([]);
  setgenderList([]);
  const options = {
    pathname: location.pathname,
    search: `?${createSearchParams()}`,
  };
  navigate(options, { replace: true });
  setCount(count + 1);
    setCharCount(0);
    setPage(1);
  
}
  return (
    <>
      <div className={homeStyles.home_page_container}>
        <FilterCharacters
          homeStyles={homeStyles}
          checkCharStatus={checkCharStatus}
          checkCharSpecies={checkCharSpecies}
          checkCharGender={checkCharGender}
          getStatusFilter={getStatusFilter}
          getGenderFilter={getGenderFilter}
          getSpeciesFilter={getSpeciesFilter}
          charCount={charCount}
          totalItems={totalItems}
          allClearFilter={allClearFilter}
        />

        <div className={homeStyles.char_card_container}>
          {characterData &&
            characterData.map((item) => {
              return (
                <Card
                  key={item.id}
                  styles={homeStyles}
                  profileImg={item?.image}
                  profileName={item?.name}
                  pid={item.id}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
