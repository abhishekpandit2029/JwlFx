"use client";

import { ConfigProvider, Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { clientsData, type Client } from "@/data/roleBasedData";
import { HiDownload } from "react-icons/hi";

export default function ClientsTable() {
  // CSV Download Function
  const downloadCSV = () => {
    // Define CSV headers
    const headers = [
      "First Name",
      "Last Name",
      "Email",
      "Phone",
      "Calling Code",
      "Role",
      "Business Info",
      "Status",
      "Created At",
    ];

    // Convert data to CSV rows
    const rows = clientsData.map((client) => [
      client.firstName,
      client.lastName,
      client.email,
      client.phone,
      client.callingCode,
      client.role,
      client.businessInfo,
      client.status,
      new Date(client.createdAt).toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      }),
    ]);

    // Escape fields that contain commas, quotes, or newlines
    const escapeCSVField = (field: string) => {
      if (field.includes(",") || field.includes('"') || field.includes("\n")) {
        return `"${field.replace(/"/g, '""')}"`;
      }
      return field;
    };

    // Create CSV content
    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.map(escapeCSVField).join(",")),
    ].join("\n");

    // Create blob and download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `clients_${new Date().toISOString().split("T")[0]}.csv`
    );
    link.style.visibility = "hidden";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const columns: ColumnsType<Client> = [
    {
      title: "NAME",
      dataIndex: "firstName",
      key: "name",
      width: 260,
      render: (_: unknown, record) => (
        <div className="py-2">
          <div className="font-medium text-black dark:text-white text-sm">
            {record.firstName} {record.lastName}
          </div>
          <div className="text-xs text-black/60 dark:text-white/60 mt-0.5">
            {record.email}
          </div>
        </div>
      ),
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    },
    {
      title: "PHONE",
      dataIndex: "phone",
      key: "phone",
      width: 180,
      render: (_: unknown, record) => (
        <span className="text-sm text-black dark:text-white">
          {record.callingCode} {record.phone}
        </span>
      ),
    },
    {
      title: "ROLE",
      dataIndex: "role",
      key: "role",
      width: 160,
      render: (role: string) => (
        <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold uppercase border border-black/20 dark:border-white/20 text-black dark:text-white bg-black/5 dark:bg-white/5">
          {role}
        </span>
      ),
      filters: [
        { text: "Customer", value: "customer" },
        { text: "Admin", value: "admin" },
        { text: "Manager", value: "manager" },
        { text: "Designer", value: "designer" },
      ],
      onFilter: (value, record) =>
        String(record.role ?? "").toLowerCase() === String(value).toLowerCase(),
      filterMultiple: true,
    },
    {
      title: "BUSINESS INFO",
      dataIndex: "businessInfo",
      key: "businessInfo",
      width: 320,
      render: (text: string) => (
        <div className="text-sm text-black/70 dark:text-white/70 line-clamp-2">
          {text}
        </div>
      ),
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
      width: 140,
      render: (status: string) => (
        <span
          className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold uppercase border ${
            String(status).toLowerCase() === "active"
              ? "border-black dark:border-white bg-black dark:bg-white text-white dark:text-black"
              : "border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5 text-black/60 dark:text-white/60"
          }`}
        >
          {status}
        </span>
      ),
      filters: [
        { text: "Active", value: "active" },
        { text: "Inactive", value: "inactive" },
      ],
      onFilter: (value, record) =>
        String(record.status ?? "").toLowerCase() ===
        String(value).toLowerCase(),
      filterMultiple: false,
    },
    {
      title: "CREATED",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 160,
      render: (date: string) => (
        <span className="text-sm text-black dark:text-white">
          {new Date(date).toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
          })}
        </span>
      ),
      sorter: (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    },
  ];

  const tableOnChange: TableProps<Client>["onChange"] = (
    pagination,
    filters,
    sorter
  ) => {
    // optional: helpful while debugging filters
    // console.log({ pagination, filters, sorter });
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="mb-6 flex items-start justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-['Cormorant_Garamond',serif] text-3xl md:text-4xl font-light text-black dark:text-white mb-2">
            All Teamates
          </h1>
        </div>

        {/* Download CSV Button */}
        <button
          onClick={downloadCSV}
          className="group flex items-center gap-2 px-4 py-2.5 border border-black/20 dark:border-white/20 rounded-lg bg-white dark:bg-black text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-200"
          aria-label="Download CSV"
        >
          <HiDownload className="w-5 h-5" />
          <span className="text-sm font-medium">Export CSV</span>
        </button>
      </div>

      {/* Table */}
      <div className="flex-1">
        <ConfigProvider
          theme={{
            token: {
              colorBgContainer: "var(--bw-bg)",
              colorText: "var(--bw-text)",
              colorBorder: "var(--bw-border)",
              colorBgElevated: "var(--bw-bg)",
              colorTextPlaceholder: "var(--bw-muted)",
              colorPrimary: "var(--bw-text)",
              fontSize: 14,
            },
            components: {
              Table: {
                headerBg: "var(--bw-header-bg)",
                headerColor: "var(--bw-text)",
                rowHoverBg: "var(--bw-hover)",
                borderColor: "var(--bw-border)",
                cellPaddingBlock: 16,
                cellPaddingInline: 16,
              },
              Pagination: {
                itemActiveBg: "var(--bw-bg)",
                itemBg: "var(--bw-bg)",
              },
            },
          }}
        >
          <Table
            columns={columns}
            dataSource={clientsData}
            rowKey={(r) => String(r.id)}
            onChange={tableOnChange}
            pagination={{
              pageSize: 10,
            }}
            scroll={{ x: 1200 }}
            className="clients-table"
          />
        </ConfigProvider>
      </div>

      <style jsx global>{`
        /* BLACK & WHITE THEME VARIABLES */
        :root {
          --bw-bg: #ffffff;
          --bw-text: #000000;
          --bw-border: rgba(0, 0, 0, 0.1);
          --bw-header-bg: rgba(0, 0, 0, 0.02);
          --bw-hover: rgba(0, 0, 0, 0.02);
          --bw-muted: rgba(0, 0, 0, 0.6);
        }

        .dark {
          --bw-bg: #000000;
          --bw-text: #ffffff;
          --bw-border: rgba(255, 255, 255, 0.1);
          --bw-header-bg: rgba(255, 255, 255, 0.02);
          --bw-hover: rgba(255, 255, 255, 0.02);
          --bw-muted: rgba(255, 255, 255, 0.6);
        }

        /* Table Container */
        .clients-table {
          background: transparent;
        }

        .clients-table .ant-table {
          background: var(--bw-bg);
          border: 1px solid var(--bw-border);
          border-radius: 12px;
          overflow: hidden;
        }

        /* Header */
        .clients-table .ant-table-thead > tr > th {
          background: var(--bw-header-bg) !important;
          color: var(--bw-text) !important;
          border-bottom: 1px solid var(--bw-border) !important;
          font-weight: 600;
          font-size: 11px;
          letter-spacing: 1.2px;
          padding: 16px !important;
        }

        .clients-table .ant-table-thead > tr > th::before {
          display: none !important;
        }

        /* Body */
        .clients-table .ant-table-tbody > tr > td {
          border-bottom: 1px solid var(--bw-border) !important;
          background: var(--bw-bg) !important;
          padding: 12px 16px !important;
        }

        .clients-table .ant-table-tbody > tr:hover > td {
          background: var(--bw-hover) !important;
        }

        /* Sort Icons */
        .clients-table .ant-table-column-sorter {
          color: var(--bw-muted);
        }

        .clients-table .ant-table-column-sorter-up.active,
        .clients-table .ant-table-column-sorter-down.active {
          color: var(--bw-text) !important;
        }

        /* Filter Icons */
        .clients-table .ant-table-filter-trigger {
          color: var(--bw-muted);
        }

        .clients-table .ant-table-filter-trigger:hover,
        .clients-table .ant-table-filter-trigger.active {
          color: var(--bw-text) !important;
        }

        /* Pagination */
        .clients-table .ant-pagination {
          color: var(--bw-text);
        }

        .clients-table .ant-pagination-item {
          background: var(--bw-bg);
          border-color: var(--bw-border);
        }

        .clients-table .ant-pagination-item a {
          color: var(--bw-text);
        }

        .clients-table .ant-pagination-item:hover {
          border-color: var(--bw-text);
        }

        .clients-table .ant-pagination-item-active {
          border-color: var(--bw-text);
          background: var(--bw-bg);
        }

        .clients-table .ant-pagination-item-active a {
          color: var(--bw-text);
        }

        .clients-table .ant-pagination-prev button,
        .clients-table .ant-pagination-next button {
          color: var(--bw-text);
          background: var(--bw-bg);
          border-color: var(--bw-border);
        }

        .clients-table .ant-pagination-prev:hover button,
        .clients-table .ant-pagination-next:hover button {
          border-color: var(--bw-text);
          color: var(--bw-text);
        }

        .clients-table .ant-pagination-disabled button {
          color: var(--bw-muted);
          background: var(--bw-bg);
          border-color: var(--bw-border);
        }

        .clients-table .ant-select-selector {
          background: var(--bw-bg) !important;
          border-color: var(--bw-border) !important;
          color: var(--bw-text) !important;
        }

        .clients-table .ant-select-arrow {
          color: var(--bw-text);
        }

        .clients-table .ant-pagination-options-quick-jumper input {
          background: var(--bw-bg);
          border-color: var(--bw-border);
          color: var(--bw-text);
        }

        /* Dropdown menus */
        .ant-dropdown {
          background: var(--bw-bg);
          border: 1px solid var(--bw-border);
          border-radius: 8px;
        }

        .ant-dropdown-menu {
          background: var(--bw-bg);
        }

        .ant-dropdown-menu-item {
          color: var(--bw-text);
        }

        .ant-dropdown-menu-item:hover {
          background: var(--bw-hover);
        }

        /* Filter dropdown */
        .ant-table-filter-dropdown {
          background: var(--bw-bg) !important;
          border: 1px solid var(--bw-border) !important;
        }

        .ant-table-filter-dropdown .ant-checkbox-wrapper {
          color: var(--bw-text) !important;
        }

        .ant-table-filter-dropdown .ant-checkbox-wrapper:hover {
          color: var(--bw-text) !important;
        }

        /* Checkbox - Unchecked state */
        .ant-table-filter-dropdown .ant-checkbox-inner {
          background: var(--bw-bg) !important;
          border-color: var(--bw-border) !important;
        }

        /* Checkbox - Checked state - FIX FOR LIGHT MODE */
        .ant-table-filter-dropdown .ant-checkbox-checked .ant-checkbox-inner {
          background: var(--bw-text) !important;
          border-color: var(--bw-text) !important;
        }

        /* Checkbox checkmark - FIX FOR LIGHT MODE */
        .ant-table-filter-dropdown
          .ant-checkbox-checked
          .ant-checkbox-inner::after {
          border-color: var(--bw-bg) !important;
        }

        /* Checkbox wrapper when checked - FIX FOR LIGHT MODE */
        .ant-table-filter-dropdown .ant-checkbox-wrapper-checked {
          color: var(--bw-text) !important;
        }

        /* Checkbox hover state */
        .ant-table-filter-dropdown .ant-checkbox:hover .ant-checkbox-inner {
          border-color: var(--bw-text) !important;
        }

        /* Filter buttons */
        .ant-table-filter-dropdown-btns {
          background: var(--bw-bg) !important;
          border-top: 1px solid var(--bw-border) !important;
        }

        .ant-table-filter-dropdown-btns .ant-btn-link {
          color: var(--bw-text) !important;
        }

        .ant-table-filter-dropdown-btns .ant-btn-link:hover {
          color: var(--bw-text) !important;
          opacity: 0.8;
        }

        .ant-table-filter-dropdown-btns .ant-btn-primary {
          background: var(--bw-text) !important;
          border-color: var(--bw-text) !important;
          color: var(--bw-bg) !important;
        }

        .ant-table-filter-dropdown-btns .ant-btn-primary:hover {
          background: var(--bw-text) !important;
          opacity: 0.9;
        }

        /* Select dropdown */
        .ant-select-dropdown {
          background: var(--bw-bg) !important;
          border: 1px solid var(--bw-border) !important;
        }

        .ant-select-item {
          color: var(--bw-text) !important;
        }

        .ant-select-item-option-active {
          background: var(--bw-hover) !important;
        }

        .ant-select-item-option-selected {
          background: var(--bw-header-bg) !important;
        }

        /* Empty State */
        .clients-table .ant-empty-description {
          color: var(--bw-muted) !important;
        }

        /* Line Clamp */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
