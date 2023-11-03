import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import PeopleList from "../../components/PeopleList";
import { getPeopleId, getPeopleImage } from "../../api/getPeopleData";
import { getApiResource } from "../../api/network";
import { API_PEOPLE } from "../../api/api";
import QueryParams from "../../hooks/queryParams";
import "./people-page.css";
import "../containers-styles.css";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [counterPage, setCounterPage] = useState(1);

  const query = QueryParams();
  const queryPage = query.get("page");

  const getResource = async (url) => {
    const res = await getApiResource(url);

    console.log(res);
    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
        return {
          id,
          name,
          img,
        };
      });
      setPeople(peopleList);
      setPrevPage(res.previous);
      setNextPage(res.next);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, [queryPage]);

  return (
    <div>
      <h1 className="title__text">CHARACTER</h1>
      {people && <PeopleList people={people} />}
    </div>
  );
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePage);
