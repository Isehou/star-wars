import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getApiResource } from "../../api/network";
import { API_PERSON } from "../../api/api";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";

import "./person-page.css";

function PersonPage({ withErrorApi, setErrorApi }) {
  const [personInfo, setPersonInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);

      if (res) {
        setPersonInfo([]);
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, [id]);

  return (
    <div>
      <div></div>
    </div>
  );
}

export default withErrorApi(PersonPage);
