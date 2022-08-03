import { faker } from "@faker-js/faker";

export const getIssues = (amount = 10) => {
  const issues = [];
  for (let idx = 0; idx < 50; idx++) {
    const newIssue = {
      id: faker.random.numeric(5),
      title: faker.random.words(6),
      createdDate: faker.date.soon(),
      isFinished: faker.datatype.boolean(),
      user: getUser(),
      comments: +faker.random.numeric(2),
      tags: [
        {
          type: "status",
          label: faker.random.words(2),
        },
        {
          type: "resolution",
          label: faker.random.words(2),
        },
        {
          type: "status",
          label: faker.random.words(2),
        },
      ],
    };
    issues.push(newIssue);
  }

  console.log("issues = ", issues);
};

const getUser = () => {
  return {
    id: faker.database.mongodbObjectId(),
    username: faker.name.findName(),
    avatarURL: faker.internet.avatar(),
    address: {
      city: faker.address.city(),
      state: faker.address.state(),
    },
  };
};
