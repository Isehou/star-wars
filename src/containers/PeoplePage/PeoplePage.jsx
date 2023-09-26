import React, { useEffect, useState } from "react";
import "./PeoplePage.module.css";
import { getApiResource } from "../../api/network";
import { API_PEOPLE } from "../../api/api";
import { getPeopleId, getPeopleImage } from "../../api/getPeopleData";
import PeopleList from "../../components/PeopleList";

const PeoplePage = () => {
  const [people, setPeople] = useState(null);

  const getResource = async (url) => {
    const res = await getApiResource(url);

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
  };

  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);

  return <div>{people && <PeopleList people={people} />}</div>;
};

export default PeoplePage;
