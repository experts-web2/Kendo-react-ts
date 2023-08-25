import * as React from "react";
import "./BankDepositFormTable.scss";
import { depositFormData, employees } from "../../constants/data";
import BankDepositFormHeader from "../../utils/BankDepositFormButton";
import { MultiColumnComboBox } from "@progress/kendo-react-dropdowns";

const columns = [
  {
    field: "id",
    header: "ID",
    width: "100px",
  },
  {
    field: "name",
    header: "Name",
    width: "300px",
  },
  {
    field: "position",
    header: "Position",
    width: "300px",
  },
];

const BankDepositFormTable = () => {
  const handleSave = () => {
    console.log("Save button clicked");
  };

  const handleCancel = () => {
    console.log("Cancel button clicked");
  };

  const table = React.useRef(null);
  const generateRows = () => {
    return depositFormData.map((deposit, index) => {
      return (
        <tr key={index}>
          <td>
            <MultiColumnComboBox
              data={employees}
              columns={columns}
              textField={"name"}

              placeholder="Account No"
            />
          </td>
          <td>
            <MultiColumnComboBox
              data={employees}
              columns={columns}
              textField={"name"}

              placeholder="Received Form"
            />
          </td>
          <td>{deposit.UnitAmount}</td>
          <td>{deposit.reference}</td>
          <td>{deposit.memo}</td>
        </tr>
      );
    });
  };

  return (
    <div className="table-container">
      <table className="table" ref={table}>
        <thead>
          <tr>
            <th>Account</th>
            <th>Received Form</th>
            <th>Amount</th>
            <th>Reference</th>
            <th>Memo</th>
          </tr>
        </thead>
        <tbody>{generateRows()}</tbody>
      </table>
      <div>
        <div className="cancel-save-wrapper">
          <BankDepositFormHeader
            label="Save"
            onClick={handleSave}
            type="primary"
          />
          <BankDepositFormHeader
            label="Cancel"
            onClick={handleCancel}
            type="warning"
          />
        </div>
        <div className="footer">
          Trans No: 233
          <input type="text" className="date-input" value="2023-08-25" />
          By: Mike Edited:
          <input type="text" className="date-input" value="2023-08-25" />
          By: Mike
        </div>
      </div>
    </div>
  );
};

export default BankDepositFormTable;
