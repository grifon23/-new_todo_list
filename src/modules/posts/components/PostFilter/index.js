import React from "react";
import { SelectPostSort } from "../../../../UI/SelectPostSort";
import { MyInpyt } from "../../../../UI/MyInput";
export const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <SelectPostSort
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Сортировать"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По коментарию" },
        ]}
      />
      <MyInpyt
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        style={{ marginLeft: "10px" }}
        type="text"
        placeholder="search post"
      />
    </div>
  );
};
