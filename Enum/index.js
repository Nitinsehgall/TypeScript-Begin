// when you want to repressent set of values and choose multiple values
//enum is used to store multiple values in a object and enum keyword will be defined
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
var user1 = {
    name: "nitin",
    email: "nitinsehgal384@gmail.com",
    password: "123",
    role: Roles.user,
};
var isAdmin = function (user1) {
    var name = user1.name, role = user1.role;
    return role === "admin"
        ? "".concat(name, " is allowed to edit the website")
        : "".concat(name, " is not allowed to edit the website");
};
console.log(isAdmin(user1));
