import React from "react";
import { Select as SelectAntd } from "antd";

const { Option } = SelectAntd;

const Select = ({ options, defaultValue, type, recordId, handleChange }) => {
  const handleSelectChange = (value) => {
    handleChange(value, type, recordId);
  };

  const onClickStopProp = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      <SelectAntd
        defaultValue={defaultValue}
        style={{ width: 150 }}
        onSelect={handleSelectChange}
        onClick={onClickStopProp}
      >
        {options.map((opt, index) => (
          <Option key={index} value={opt.title}>
            {opt.title}
          </Option>
        ))}
      </SelectAntd>
    </div>
  );
};

export default Select;
