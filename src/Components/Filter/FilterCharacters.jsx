

const FilterCharacters = ({
  homeStyles,
  checkCharStatus,
  getStatusFilter,
  checkCharGender,
  getGenderFilter,
  checkCharSpecies,
  getSpeciesFilter,
  charCount,
  totalItems,
  allClearFilter,
}) => {
  return (
    <>
      <div className={homeStyles.filter_container}>
        <h1>Filter Data</h1>
        <div>
          <button
            onClick={() => {
              allClearFilter();
            }}
          >
            Clear Filters
          </button>
        </div>
        <div className={homeStyles.character_info}>
          <span>Total {charCount}</span> of <span>{totalItems} Characters</span>
        </div>

        {/* <div>
            <h3>Select Location</h3>
            <input
              type="text"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
            />
            <div className={homeStyles.location_info_wraper}>
              {searchedLocations.length > 0 &&
                searchedLocations.map((item) => {
                  return (
                    <p key={item.id}>
                      <input type="checkbox" id={item.id} value={item.id} onClick={() => {}}/>
                      <label htmlFor={item.id}>{item.name}</label>
                     
                    </p>
                  );
                })}
            </div>
          </div> */}
        {/* <div>
            <h3>Select Episode</h3>
            <input
              type="text"
              value={searchEpisode}
              onChange={(e) => setSearchEpisode(e.target.value)}
            />
            <div className={homeStyles.location_info_wraper}>
              {searchedEpisodes.length > 0 &&
                searchedEpisodes.map((item) => {
                  return (
                    <p key={item.id}>
                      <input type="checkbox" id={"_"+item.id} value={item.id} onClick={() => {}}/>
                      <label htmlFor={"_"+item.id}>{item.name}</label>
                     
                    </p>
                  );
                })}
            </div>
          </div> */}
        <div>
          <div>
            <div className={homeStyles.flex_start}>
              <h3>Select Status</h3>
              <p>
                {/* <input type="checkbox" value="Alive" id="Alive" checked={checkCharStatus("Alive")} onClick={(e) => {getStatusFilter(e)}}/> */}
                <input
                  type="checkbox"
                  value="Alive"
                  name="status_radio_button"
                  id="Alive"
                  checked={checkCharStatus("Alive")}
                  onClick={(e) => {
                    getStatusFilter(e);
                  }}
                />

                <label htmlFor="Alive">Alive</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  value="Dead"
                  name="status_radio_button"
                  id="Dead"
                  checked={checkCharStatus("Dead")}
                  onClick={(e) => {
                    getStatusFilter(e);
                  }}
                />
                <label htmlFor="Dead">Dead</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  value="Unknown"
                  ame="status_radio_button"
                  id="__Unknown"
                  checked={checkCharStatus("Unknown")}
                  onClick={(e) => {
                    getStatusFilter(e);
                  }}
                />
                <label htmlFor="__Unknown">Unknown</label>
              </p>
            </div>
          </div>

          <div>
            <div className={homeStyles.flex_start}>
              <h3>Select Gender</h3>
              <p>
                <input
                  type="checkbox"
                  checked={checkCharGender("Female")}
                  value="Female"
                  id="Female"
                  onChange={(e) => {
                    getGenderFilter(e);
                  }}
                />
                <label htmlFor="Female">Female</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  checked={checkCharGender("Male")}
                  value="Male"
                  id="Male"
                  onChange={(e) => {
                    getGenderFilter(e);
                  }}
                />
                <label htmlFor="Male">Male</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  checked={checkCharGender("Genderless")}
                  value="Genderless"
                  id="Genderless"
                  onChange={(e) => {
                    getGenderFilter(e);
                  }}
                />
                <label htmlFor="Genderless">Genderless</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  checked={checkCharGender("Unknown")}
                  value="Unknown"
                  id="Unknown"
                  onChange={(e) => {
                    getGenderFilter(e);
                  }}
                />
                <label htmlFor="Unknown">Unknown</label>
              </p>
            </div>
          </div>
          <div>
            <div className={homeStyles.flex_start}>
              <h3>Select Species</h3>
              <p>
                <input
                  type="checkbox"
                  checked={checkCharSpecies("Human")}
                  value="Human"
                  id="Human"
                  onChange={(e) => {
                    getSpeciesFilter(e);
                  }}
                />
                <label htmlFor="Human">Human</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  value="Alien"
                  checked={checkCharSpecies("Alien")}
                  id="Alien"
                  onChange={(e) => {
                    getSpeciesFilter(e);
                  }}
                />
                <label htmlFor="Alien">Alien</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  value="Animal"
                  checked={checkCharSpecies("Animal")}
                  id="Animal"
                  onChange={(e) => {
                    getSpeciesFilter(e);
                  }}
                />
                <label htmlFor="Animal">Animal</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  value="Humanoid"
                  checked={checkCharSpecies("Humanoid")}
                  id="Humanoid"
                  onChange={(e) => {
                    getSpeciesFilter(e);
                  }}
                />
                <label htmlFor="Humanoid">Humanoid</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  value="Robot"
                  checked={checkCharSpecies("Robot")}
                  id="Robot"
                  onChange={(e) => {
                    getSpeciesFilter(e);
                  }}
                />
                <label htmlFor="Robot">Robot</label>
              </p>
              <p>
                <input
                  type="checkbox"
                  value="Unknown"
                  checked={checkCharSpecies("Unknown")}
                  id="_Unknown"
                  onChange={(e) => {
                    getSpeciesFilter(e);
                  }}
                />
                <label htmlFor="_Unknown">Unknown</label>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterCharacters;
