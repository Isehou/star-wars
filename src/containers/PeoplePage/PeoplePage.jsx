import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import PeopleList from "../../components/PeopleList";
import PeopleNavigation from "../../components/PeopleNavigation/PeopleNavigation";
import {
  getPeopleId,
  getPeopleImage,
  getPeoplePageId,
} from "../../api/getPeopleData";
import { getApiResource } from "../../api/network";
import { API_PEOPLE } from "../../api/api";
import QueryParams from "../../hooks/queryParams";

import "../containers-styles.css";
import "./people-page.css";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [counterPage, setCounterPage] = useState(1);

  const query = QueryParams();
  const queryPage = query.get("page");

  const getResource = async (url) => {
    const res = await getApiResource(url);

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
      setCounterPage(getPeoplePageId(url));
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
      <PeopleNavigation
        getResource={getResource}
        prevPage={prevPage}
        nextPage={nextPage}
        counterPage={counterPage}
      />
      {people && <PeopleList people={people} />}
    </div>
  );
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePage);
