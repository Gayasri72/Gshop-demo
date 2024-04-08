import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: "true",
  },
  {
    name: "Gayasri Pethum",
    email: "gayasripethum1@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: "false",
  },
  {
    name: "Kavindi Rasanjali",
    email: "kavi@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: "false",
  },
];
export default users;
