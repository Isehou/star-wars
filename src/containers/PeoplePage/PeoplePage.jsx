import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { withErrorApi } from "../../hoc-helpers/withErrorApi";
import PeopleList from "../../components/PeopleList";
import { getPeopleId, getPeopleImage } from "../../api/getPeopleData";
import { getApiResource } from "../../api/network";
import { API_PEOPLE } from "../../api/api";
import "./people-page.css";
import "../containers-styles.css";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);

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
      <h1 className="title__text">CHARACTER</h1>
      {people && <PeopleList people={people} />}
    </div>
  );
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePage);
