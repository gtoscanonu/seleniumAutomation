
import { TestLogin } from "./testLoginUser";

(async () => {
  const test = new TestLogin()
  await test.beforeTest()
  await test.testVerifyLogin()
  await test.afterTest()
})()
