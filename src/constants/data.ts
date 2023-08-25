export const depositFormData = [
  {
    DepositName: "Deposit A",
    UnitAmount: 1000.0,
    AccountOptions: ["Savings", "Checking", "CD"],
    ReceivedFormOptions: ["Online", "In-Person", "By Mail"],
    memo: "This is a memo",
    reference: "100",
  },
  {
    DepositName: "Deposit B",
    UnitAmount: 500.0,
    AccountOptions: ["Savings", "Checking"],
    ReceivedFormOptions: ["In-Person", "By Mail"],
    memo: "This is a memo",
    reference: "100",
  },
  {
    DepositName: "Deposit C",
    UnitAmount: 2000.0,
    AccountOptions: ["Checking", "CD"],
    ReceivedFormOptions: ["Online", "In-Person"],
    memo: "This is a memo",
    reference: "100",
  },
];


export const employees = [{
  "id": 1,
  "name": "Daryl Sweeney",
  "reportsTo": null,
  "phone": "(555) 924-9726",
  "extension": 8253,
  "hireDate": new Date("2012-02-07T20:00:00.000Z"),
  "fullTime": true,
  "position": "CEO",
  "timeInPosition": 2
}, {
  "id": 2,
  "name": "Guy Wooten",
  "reportsTo": 1,
  "phone": "(438) 738-4935",
  "extension": 1155,
  "hireDate": new Date("2010-03-03T20:00:00.000Z"),
  "fullTime": true,
  "position": "Chief Technical Officer",
  "timeInPosition": 1
}, {
  "id": 100,
  "name": "Darrel Kinney",
  "reportsTo": 40,
  "phone": "(888) 483-9606",
  "extension": 4779,
  "hireDate": new Date("2014-03-24T00:00:00.000Z"),
  "fullTime": false,
  "position": "Graphic Designer",
  "timeInPosition": 1
}];

export const receivedForm = [200, 120, 340, 230];
export const bankAccountNumber = [1223343, 32323, 3232323];
export const pmtAccountNumber = [1223343, 32323, 3232323];
