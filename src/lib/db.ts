import { PrismaClient as UserPrismaClient } from "../../prisma/generated/user";
import { PrismaClient as JobmelaPrismaClient } from "../../prisma/generated/jobmela";
// import { PrismaClient as CustomerPrismaClient } from "../../prisma/generated/customer";
// import { PrismaClient as TestPrismaClient } from "../../prisma/generated/test";

const userPrismaClientSingleton = () => {
  return new UserPrismaClient();
};

const JobmelaPrismaClientSingleton = () => {
  return new JobmelaPrismaClient();
};

// const customerPrismaClientSingleton = () => {
//   return new CustomerPrismaClient();
// };

// const testPrismaClientSingleton = () => {
//   return new TestPrismaClient();
// };

// Declare global types to avoid multiple instances during development
declare global {
   // eslint-disable-next-line no-var
  var userPrisma: undefined | ReturnType<typeof userPrismaClientSingleton>;
   // eslint-disable-next-line no-var
  var JobmelaPrisma: undefined | ReturnType<typeof JobmelaPrismaClientSingleton>;
   // eslint-disable-next-line no-var
  // var customerPrisma: undefined | ReturnType<typeof customerPrismaClientSingleton>;
   // eslint-disable-next-line no-var
  //  var testPrisma: undefined | ReturnType<typeof testPrismaClientSingleton>;
}

export const userPrisma =
  globalThis.userPrisma ?? userPrismaClientSingleton();
export const JobmelaPrisma =
  globalThis.JobmelaPrisma ?? JobmelaPrismaClientSingleton();
// export const customerPrisma =
//   globalThis.customerPrisma ?? customerPrismaClientSingleton();
  // export const testPrisma =
  // globalThis.testPrisma ?? testPrismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
  globalThis.userPrisma = userPrisma;
  globalThis.JobmelaPrisma = JobmelaPrisma;
  // globalThis.customerPrisma = customerPrisma;
  // globalThis.testPrisma = testPrisma;
}
