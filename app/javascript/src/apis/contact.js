const fetch = async () => {
  const userExample1 = {
    name: "Ronald Richards",
    role: "Owner",
    email: "richards@example.com",
    profilePic: "https://i.pravatar.cc/300",
    createdAt: new Date().toString(),
  };
  const userExample2 = {
    name: "Jacob Jones",
    role: "Owner",
    email: "jones@example.com",
    profilePic: "",
    createdAt: new Date().toString(),
  };
  const mock = Array.from({ length: 100 }, (v, i) =>
    i % 2 === 0 ? { ...userExample1, id: i } : { ...userExample2, id: i }
  );

  return Promise.resolve({
    data: {
      contacts: mock,
    },
  });
};
const create = async values => Promise.resolve(values);
const update = async values => Promise.resolve(values);
const destroy = async () => Promise.resolve();

const contactApi = {
  fetch,
  create,
  update,
  destroy,
};

export default contactApi;
