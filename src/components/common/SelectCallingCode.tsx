// "use client";

// import { callingCodeData } from "@/data/callingCodeData";
// import { useState, useMemo } from "react";
// import { Select } from "antd";

// const { Option } = Select;

// export default function SelectCallingCode({
//   onChange,
// }: {
//   onChange?: (value: string) => void;
// }) {
//   const [search, setSearch] = useState("");
//   const [selected, setSelected] = useState("");

//   const callingCodes = useMemo(() => {
//     return callingCodeData.map((code) => ({
//       label: code,
//       value: code,
//     }));
//   }, []);

//   const filteredCodes = useMemo(() => {
//     return callingCodes.filter((item) =>
//       item.label.toLowerCase().includes(search.toLowerCase())
//     );
//   }, [search, callingCodes]);

//   const handleChange = (value: string) => {
//     setSelected(value);
//     if (onChange) onChange(value);
//   };

//   return (
//     <div className="w-20">
//       <Select
//         showSearch
//         placeholder="+44"
//         value={selected || undefined}
//         onChange={handleChange}
//         onSearch={setSearch}
//         filterOption={false}
//         className="w-full"
//         dropdownMatchSelectWidth={200}
//         style={{
//           height: 48,
//           borderRadius: 8,
//         }}
//         dropdownStyle={{
//           borderRadius: 8,
//         }}
//       >
//         {filteredCodes.map((item, idx) => (
//           <Option key={idx} value={item.value}>
//             {item.label}
//           </Option>
//         ))}
//       </Select>
//     </div>
//   );
// }

// SelectCallingCode.tsx
"use client";

import { callingCodeData } from "@/data/callingCodeData";
import { useMemo, useState } from "react";
import { Select } from "antd";

const { Option } = Select;

export default function SelectCallingCode({
  onChange,
}: {
  onChange?: (value: string) => void;
}) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");

  const callingCodes = useMemo(() => {
    return callingCodeData.map((code) => ({
      label: code,
      value: code,
    }));
  }, []);

  const filteredCodes = useMemo(() => {
    return callingCodes.filter((item) =>
      item.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, callingCodes]);

  const handleChange = (value: string) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <div className="w-20">
      <Select
        showSearch
        placeholder="+44"
        value={selected || undefined}
        onChange={handleChange}
        onSearch={setSearch}
        filterOption={false}
        className="w-full"
        dropdownMatchSelectWidth={200}
        style={{
          height: 48,
          borderRadius: 8,
        }}
        dropdownStyle={{
          borderRadius: 8,
        }}
      >
        {filteredCodes.map((item, idx) => (
          <Option key={idx} value={item.value}>
            {item.label}
          </Option>
        ))}
      </Select>
    </div>
  );
}
