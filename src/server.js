require("dotenv").config();
const app = require("./app");

app.listen(process.env.PORT, () => {
  console.log(
    `Server is listening at endpoint : http://127.0.0.1:${process.env.PORT}`
  );
});
