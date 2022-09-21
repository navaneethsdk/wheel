const fetch = async () => {
  const userExample1 = {
    name: "Ronald Richards",
    role: "Owner",
    email: "richards@example.com",
    profile_pic: "https://i.pravatar.cc/300",
    created_at: new Date().toString(),
  };
  const userExample2 = {
    name: "Jacob Jones",
    role: "Owner",
    email: "jones@example.com",
    profile_pic: "",
    created_at: new Date().toString(),
  };
  const mock = [];
  let count = 0;
  for (let i = 0; i < 50; i++) {
    userExample1["id"] = count;
    userExample2["id"] = count + 1;
    count = count + 2;
    mock.push(JSON.parse(JSON.stringify(userExample1)));
    mock.push(JSON.parse(JSON.stringify(userExample2)));
  }
  return {
    data: {
      contacts: mock,
    },
  };
};
const create = async () => {};
const destroy = async () => {};
const contactApi = {
  fetch,
  create,
  destroy,
};

export default contactApi;
