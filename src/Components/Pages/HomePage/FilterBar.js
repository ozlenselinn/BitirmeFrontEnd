import { useState } from "react";

const FilterBar = ({
  genders,
  onNameFilter,
  onAgeFilter,
  onGenderFilter,
  onDateFilter,
}) => {
  const [filters, setFilters] = useState({
    name: "",
    age:"",
    gender: "",
    from: "",
    to: "",
  });

  const handleInput = (field) => (event) => {
    const { value } = event.target;

    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "name":
        onNameFilter(value);
        break;
      case "age":
        onAgeFilter(value);
        break;
      case "gender":
        onGenderFilter(value);
        break;
      case "from":
        onDateFilter(value, "from");
        break;
      case "to":
        break;
      default:
        break;
    }
  };

  return (
    <div className="row my-5">
      <div className="col">
        <h4 className="border-bottom">Filtrele</h4>
      </div>
      <div className="col-sm-12 my-2" style = {{padding:'10px 0px'}}>
        <label htmlFor="name">isim</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={filters.name}
          onChange={handleInput("name")}
        />
      </div>

      <div className="col-sm-12 my-2" style = {{padding:'10px 0px'}}>
        <label htmlFor="age">Yaş</label>
        <input
          type="number"
          className="form-control"
          id="age"
          onChange={handleInput("age")}
        />
      </div>

      <div className="col-sm-12 my-2" style = {{padding:'10px 0px'}}>
        <label htmlFor="gender">Cinsiyet</label>
        <select
          className="form-control"
          id="gender"
          onChange={handleInput("gender")}
        >
          <option value="">Select</option>
          {genders.map((gender) => (
            <option value={gender} key={gender}>
              {gender}
            </option>
          ))}
        </select>
      </div>

      <div className="col-sm-12 my-2" style = {{padding:'10px 0px'}}>
        <label htmlFor="startDate">Kayıp Tarihi</label>
        <input
          type="date"
          className="form-control"
          id="startDate"
          onChange={handleInput("from")}
        />
      </div>
      <div className="col-sm-12 my-2" style = {{padding:'10px 0px'}}>
        <label htmlFor="endDate">To</label>
        <input
          type="date"
          className="form-control"
          id="endDate"
          onChange={handleInput("to")}
        />
      </div>
    </div>
  );
};

export default FilterBar;