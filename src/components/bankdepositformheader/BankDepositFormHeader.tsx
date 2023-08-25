import React, { useCallback } from "react";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import "./BankDepositFormHeader.scss";
import {
  bankAccountNumber,
  pmtAccountNumber,
  receivedForm,
} from "../../constants/data";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import {
  Input,
} from "@progress/kendo-react-inputs";

const BankDepositFormHeader = () => {
  const defaultDate: Date = new Date("2019-08-01T00:00:00Z");
  const [date, setDate] = React.useState<Date>(defaultDate);

  const handleDateChange = useCallback(
    (event: any) => {
      if (event.value instanceof Date) {
        setDate(event.value);
      }
    },
    [setDate]
  );

  return (
    <div className="container">
      <div className="inner-border">
      <div>
        <DropDownList
          style={{ width: "230px" }}
          data={receivedForm}
          defaultValue="Received Form"
        />
        <div className="address">
          <p className="small-font">Address:</p>
          <p className="small-font">123 Main St City, State, and Zip</p>
        </div>
      </div>
      <div>
      <div className="input-container">
        <div>
          <DropDownList
            data={bankAccountNumber}
            defaultValue="Bank Account"
          />
        </div>
        <div>
          <DropDownList
            data={pmtAccountNumber}
            defaultValue="Pmt Method"
          />
        </div>
        <div>
          <Input type="text" className="payment-no" placeholder="payment No" />
        </div>
        <div>
          <DatePicker
            value={date}
            onChange={handleDateChange}
            format="dd/MMM/yyyy"
          />
        </div>
      </div>
      <div>
      <Input type="text" className="memo-input" placeholder="Memo" />
      </div>
      </div>
      <div className="total-deposit">
        <div>
          <p>Total Deposit</p>
          <p>23483675638732</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BankDepositFormHeader;
