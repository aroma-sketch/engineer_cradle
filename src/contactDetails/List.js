import axios from "axios";
import React, { useEffect, useState } from "react";
import { get_list_url, TOKEN_KEY, UNIQUE_CODE } from "../helper/index";

import "./list.css";

const getRequestData = (endpoint) => {
  console.log(endpoint, "end");
  return {
    url: endpoint,
    headers: { token: TOKEN_KEY },
    method: "get",
  };
};

const List = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    fetchListData();
  }, []);

  const fetchListData = async () => {
    const request = getRequestData(get_list_url + UNIQUE_CODE);
    await axios(request)
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          setListData(response.data?.data);
        }
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <table className="list-container">
      <tbody>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Email</th>
          <th>Jobstatus</th>
          <th>DoLiketoCode</th>
        </tr>

        {listData?.map((data) => (
          <tr>
            <td>{data.Name}</td>
            <td>{data.Address}</td>
            <td>{data.Email}</td>
            <td>{data.JobStatus}</td>
            <td>{`${data.DoLiketoCode}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default List;
