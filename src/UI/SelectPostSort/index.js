import React from "react";

export const SelectPostSort = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ padding: "5px" }}
    >
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.name}
        </option>
      ))}
    </select>
  );
};
