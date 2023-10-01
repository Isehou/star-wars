import React, { useEffect, useState } from "react";
import { getApiResource } from "../../api/network";
import { API_PEOPLE } from "../../api/api";
import { getPeopleId, getPeopleImage } from "../../api/getPeopleData";
import PeopleList from "../../components/PeopleList";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import "./people-page.css";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);

  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        console.log(img);
        return {
          id,
          name,
          img,
        };
      });

      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);

  return (
    <div>
      <h1>Navigation</h1>
      {people && <PeopleList people={people} />}
    </div>
  );
};

export default withErrorApi(PeoplePage);
