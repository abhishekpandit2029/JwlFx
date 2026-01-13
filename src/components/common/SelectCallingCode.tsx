"use client";

import { callingCodeData } from "@/data/callingCodeData";
import { useMemo, useState } from "react";
import { Select, ConfigProvider } from "antd";

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
      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: "var(--select-bg)",
            colorBorder: "var(--select-border)",
            colorText: "var(--select-text)",
            colorTextPlaceholder: "var(--select-placeholder)",
            colorBgElevated: "var(--select-dropdown-bg)",
            colorPrimaryHover: "var(--select-hover)",
            controlOutline: "var(--select-outline)",
          },
          components: {
            Select: {
              optionSelectedBg: "var(--select-selected-bg)",
              optionActiveBg: "var(--select-active-bg)",
            },
          },
        }}
      >
        <Select
          showSearch
          placeholder="+44"
          value={selected || undefined}
          onChange={handleChange}
          onSearch={setSearch}
          filterOption={false}
          className="w-full calling-code-select"
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
      </ConfigProvider>

      <style jsx global>{`
        :root {
          --select-bg: #ffffff;
          --select-border: rgba(0, 0, 0, 0.4);
          --select-text: #000000;
          --select-placeholder: rgba(0, 0, 0, 0.3);
          --select-dropdown-bg: #ffffff;
          --select-hover: rgba(0, 0, 0, 0.04);
          --select-outline: rgba(0, 0, 0, 0.1);
          --select-selected-bg: rgba(0, 0, 0, 0.05);
          --select-active-bg: rgba(0, 0, 0, 0.04);
        }

        .dark {
          --select-bg: #000000;
          --select-border: rgba(255, 255, 255, 0.4);
          --select-text: #ffffff;
          --select-placeholder: rgba(255, 255, 255, 0.3);
          --select-dropdown-bg: #000000;
          --select-hover: rgba(255, 255, 255, 0.04);
          --select-outline: rgba(255, 255, 255, 0.1);
          --select-selected-bg: rgba(255, 255, 255, 0.05);
          --select-active-bg: rgba(255, 255, 255, 0.04);
        }

        .calling-code-select .ant-select-selector {
          background-color: var(--select-bg) !important;
          border-color: var(--select-border) !important;
          color: var(--select-text) !important;
          transition: all 0.2s ease;
        }

        .calling-code-select .ant-select-selector:hover {
          border-color: var(--select-text) !important;
        }

        .calling-code-select .ant-select-selector:focus,
        .calling-code-select.ant-select-focused .ant-select-selector {
          border-color: var(--select-text) !important;
          box-shadow: 0 0 0 2px var(--select-outline) !important;
        }

        .calling-code-select .ant-select-selection-placeholder {
          color: var(--select-placeholder) !important;
        }

        .calling-code-select .ant-select-selection-search-input {
          color: var(--select-text) !important;
        }

        .calling-code-select .ant-select-arrow {
          color: var(--select-text) !important;
        }

        /* Dropdown styles */
        .ant-select-dropdown {
          background-color: var(--select-dropdown-bg) !important;
          border: 1px solid var(--select-border) !important;
        }

        .ant-select-item {
          color: var(--select-text) !important;
        }

        .ant-select-item-option-active {
          background-color: var(--select-active-bg) !important;
        }

        .ant-select-item-option-selected {
          background-color: var(--select-selected-bg) !important;
        }

        .ant-select-item-option:hover {
          background-color: var(--select-hover) !important;
        }

        /* Clear icon */
        .calling-code-select .ant-select-clear {
          background-color: var(--select-bg) !important;
          color: var(--select-text) !important;
        }
      `}</style>
    </div>
  );
}
