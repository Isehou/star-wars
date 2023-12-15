import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getApiResource } from "../../api/network";
import { getPeopleImage } from "../../api/getPeopleData";
import { API_PERSON } from "../../api/api";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";

import "./person-page.css";

function PersonPage({ withErrorApi, setErrorApi }) {
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);

      if (res) {
        setPersonInfo([
          { title: "Height", data: res.height },
          { title: "Mass", data: res.mass },
          { title: "Skin Color", data: res.skin_color },
          { title: "Eye Color", data: res.eye_color },
          { title: "Birth Year", data: res.birth_year },
          { title: "Gender", data: res.gender },
          { title: "Vehicles", data: res.vehicles },
        ]);
        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(id));

        // res.films

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, [id]);

  return (
    <div className="wrapper">
      <h3>{personName}</h3>
      <img src={personPhoto} alt={personName} />
      <div className="person-page">
        <div className="go-back_btn">
          <button></button>
        </div>
        {personInfo && (
          <ul>
            {personInfo.map(({ title, data }) => {
              data && (
                <li key={title}>
                  <span>
                    {title}: {data}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default withErrorApi(PersonPage);
