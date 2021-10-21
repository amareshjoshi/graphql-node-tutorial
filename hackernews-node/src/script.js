//
// import PrismaClient constructor from the node prisma/client module
const { PrismaClient } = require("@prisma/client");

//
// create an instance of PrismaClient
const prisma = new PrismaClient();

//
// define main() to send queries to DB
async function main() {
  // create a new link
  const newLink = await prisma.link.create({
    data: {
      description: "Fullstack tutorial for GraphQL",
      url: "www.howtographql.com",
    },
  });
  const allLinks = await prisma.link.deleteMany();
  console.log(allLinks);
}

//
main()
  .catch((e) => {
    throw e;
  })
  //
  // close DB when script terminates
  .finally(async () => {
    await prisma.$disconnect();
  });
