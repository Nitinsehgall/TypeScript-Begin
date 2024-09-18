// when you want to repressent set of values and choose multiple values
//enum is used to store multiple values in a object and enum keyword will be defined
enum Roles {
  user = "user",
  admin = "admin",
}

type LoginDetails = {
  name?: string;
  email: string;
  password: string;
  role: Roles;
};

const user1: LoginDetails = {
  name: "nitin",
  email: "nitinsehgal384@gmail.com",
  password: "123",
  role: Roles.user,
};

const isAdmin = (user1: LoginDetails): string => {
  const { name, role } = user1;
  return role === "admin"
    ? `${name} is allowed to edit the website`
    : `${name} is not allowed to edit the website`;
};
console.log(isAdmin(user1));



