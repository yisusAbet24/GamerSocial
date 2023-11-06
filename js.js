const obj = {
  email: "paolo@gmail.com",
  password: "123456",
};
const url = "https://99e0-200-68-172-17.ngrok-free.app";

const sendObj = async (obj, url) => {
  const response = await fetch(`${url}/api/auth/login`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

sendObj(obj, url)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
