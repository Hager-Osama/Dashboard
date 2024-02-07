export const rows = [
  {
    id: 1,
    name: "Hager",
    email: "test@gmail.com",
    age: "20",
    phone: "0123456789",
    address: "123 canvile street",
    city: "zagazig",
    zipCode: "1102",
    registrarId: 3656,
  },
  {
    id: 2,
    name: "Ahmed",
    email: "test@gmail.com",
    age: "31",
    phone: "0123456789",
    address: "123 canvile street",
    city: "zagazig",
    zipCode: "1102",
    registrarId: 3658,
  },
  {
    id: 3,
    name: "Shehab",
    email: "test@gmail.com",
    age: "30",
    phone: "0123456789",
    address: "123 canvile street",
    city: "zagazig",
    zipCode: "1102",
    registrarId: 3659,
  },
  {
    id: 4,
    name: "Mohsen",
    email: "test@gmail.com",
    age: "22",
    phone: "0123456789",
    address: "123 canvile street",
    city: "Giza",
    zipCode: "1142",
    registrarId: 9857,
  },
  {
    id: 5,
    name: "Abdelrahman",
    email: "test@gmail.com",
    age: "50",
    phone: "0123456789",
    address: "123 canvile street",
    city: "Giza",
    zipCode: "1142",
    registrarId: 5566,
  },
  {
    id: 6,
    name: "Hello",
    email: "test@gmail.com",
    age: "28",
    phone: "0123456789",
    address: "123 canvile street",
    city: "zagazig",
    zipCode: "1102",
    registrarId: 3230,
  },
  {
    id: 7,
    name: "Abdelrahman",
    email: "test@gmail.com",
    age: "6",
    phone: "0123456789",
    address: "123 canvile street",
    city: "zagazig",
    zipCode: "1102",
    registrarId: 1112,
  },
  {
    id: 8,
    name: "Abdelrahman",
    email: "test@gmail.com",
    age: "20",
    phone: "0123456789",
    address: "123 canvile street",
    city: "zagazig",
    zipCode: "1102",
    registrarId: 3659,
  },
  {
    id: 9,
    name: "Abdelrahman",
    email: "test@gmail.com",
    age: "80",
    phone: "0123456789",
    address: "1236 canvile street",
    city: "zagazig",
    zipCode: "1102",
    registrarId: 3650,
  },
];
export const columns = [
  /*field is reqird */
  {
    field: "id",
    headerName: "ID",
    width:33
  },
  {
    field: "registrarId",
    headerName: "Registrar ID",
    flex: 1,
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    align: "left",
    headerAlign: "left",
  },
  {
    field: "phone",
    headerName: "Phone Number",
    flex: 1,
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
  },
  {
    field: "address",
    headerName: "Address",
    flex: 1,
  },
  {
    field: "city",
    headerName: "City",
    flex: 1,
  },
  {
    field: "zipCode",
    headerName: "Zip Code",
  },
];
