import React from "react";
import { useState } from "react";
import dayjs from "dayjs";
import FilterBar from "./FilterBar";
import PersonItem from "./PersonItem";
import { data } from "./Data";
import "bootstrap/dist/css/bootstrap.min.css";


const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

function Home() {
    const [allData, setData] = useState(data);
  
    const generateGenderDataForDropdown = () => {
      return [...new Set(data.map((item) => item.gender))];
    };
  
    const handleFilterName = (name) => {
      const filteredData = data.filter((item) => {
        const fullName = `${item.first_name} ${item.last_name}`;
        if (fullName.toLowerCase().includes(name.toLowerCase())) {
          return item;
        }
      });
  
      setData(filteredData);
    };
  
    const handleFilterAge = (age) => {
      const filteredData = data.filter((item) => {
        if (item.age==age) {
          return item;
        }
      });
  
      setData(filteredData);
    };
  
    const handleFilterGender = (gender) => {
      const filteredData = data.filter((item) => {
        if (item.gender === gender) {
          return item;
        }
      });
  
      setData(filteredData);
    };
  
    const handleFilterDate = (date, field) => {
      const filteredData = data.filter((item) => {
        if (field === "from" && dayjs(item.date).isSameOrAfter(dayjs(date))) {
          return item;
        }
      });
  
      setData(filteredData);
    };
  
    return (
      <div className = "homebody" >
      <div className="container" style = {{margin:'20px', padding: '20px 20px'}}>
        <div className="row" style = {{padding:'20px 20px'}}>
          <div className="col-sm-3" >
            <FilterBar
              genders={generateGenderDataForDropdown()}
              onNameFilter={handleFilterName}
              onAgeFilter={handleFilterAge}
              onGenderFilter={handleFilterGender}
              onDateFilter={handleFilterDate}
            />
          </div>
          <div className="col-sm-9" style = {{padding:'30px '}} >
            <div className="row mt-5" style = {{margin:'20px 20px'}}>
              {allData.map((item) => (
                <PersonItem item={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
      
    );
  }
  
  export default Home;