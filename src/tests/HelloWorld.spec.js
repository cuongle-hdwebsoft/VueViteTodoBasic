import { expect } from "chai";
import Sinon from "sinon";
import { afterEach, describe, it } from "vitest";
import { faker } from "@faker-js/faker";

const student = {
  name: "Lê Minh Cường",
  getName() {
    console.log("this.name", this.name);
    return "My name is " + this.name;
  },
  getThis() {
    return this;
  },
  sayHi(name) {
    return this.name + " say hi to " + name;
  },
};

const db = {
  students: Array.from({ length: 10 }).map(() => ({
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  })),
};
const delay = 500;
const StudentApi = {
  getAll() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(db.students);
      }, delay);
    });
  },
  getById(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(db.students.find((i) => i.id === id));
      }, delay);
    });
  },
};

describe("HelloWorld.spec.js", function () {
  afterEach(() => {
    Sinon.restore();
  });

  it("should stub my sum function", function () {
    const sum = Sinon.stub();

    sum();

    expect(sum.called).to.be.equal(true);
  });

  it("should onCall", function () {
    const sum = Sinon.stub();

    sum.withArgs(1, 2).onCall(0).returns(3);
    sum.withArgs(2, 3).onCall(0).returns(5);
    sum.withArgs(4, 2).onCall(0).returns(6);

    sum(1, 2);
    sum(1, 2);
    sum(1, 2);

    sum(2, 3);
    sum(4, 2);

    expect(sum.withArgs(1, 2).returnValues).to.deep.equal([
      3,
      undefined,
      undefined,
    ]);
    expect(sum.withArgs(2, 3).returnValues).to.deep.equal([5]);
    expect(sum.withArgs(4, 2).returnValues).to.deep.equal([6]);
    expect(sum.withArgs().returnValues).to.deep.equal([
      3,
      undefined,
      undefined,
      5,
      6,
    ]);
  });

  it("should callsFake", function () {
    const sum = Sinon.stub();
    sum.callsFake(function fakeCall() {
      return arguments[0] + 1;
    });

    sum(1);
    sum(1);

    expect(sum.withArgs(1).returnValues).to.deep.equal([2, 2]);
    expect(sum.withArgs(1).args).to.deep.equal([[1], [1]]);
  });

  it("should returnsArg", function () {
    // Causes the stub to return the argument at the provided index.
    // Làm cho stub return agrs tại vị trí dc chỉ định
    const sum = Sinon.stub();
    sum.returnsArg(1);

    sum(1, 0);
    sum({ name: "Lê Minh Cường" }, { name: "Ram4GB" });
    sum(4, 5);

    expect(sum.returnValues).to.deep.equal([0, { name: "Ram4GB" }, 5]);
  });

  it("should returnsThis", function () {
    const sum = Sinon.stub();
    sum.returnsThis();

    sum();

    expect(sum.returnValues).to.deep.equal([undefined]);

    const getName = Sinon.stub(student, "getName");
    getName.returnsThis(); // require stub return this

    student.getName();

    expect(getName.returnValues[0]).to.deep.equal(student);

    const sayHi = Sinon.stub(student, "sayHi");

    sayHi.withArgs("Ram4GB").returnsThis();
    sayHi.withArgs("Lê Minh Cường").returnsArg(0);

    student.sayHi("Ram4GB");
    student.sayHi("Lê Minh Cường");

    expect(sayHi.returnValues[0]).to.deep.equal(student);
    expect(sayHi.returnValues[1]).to.deep.equal("Lê Minh Cường");
    expect(sayHi).to.be.equal(student.sayHi);
    expect(getName).to.be.equal(student.getName);
  });

  it("should resolves", async function () {
    const getAll = Sinon.stub(StudentApi, "getAll");
    const fakeStudent = {
      id: 1,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    };

    getAll.resolves(fakeStudent);

    let rs = await StudentApi.getAll().then((data) => data);

    expect(rs).to.deep.equal(fakeStudent);
  });

  it("should callsArg", function () {
    // Causes the stub to call the argument at the provided index as a callback function.
    let cb = () => {
      console.log("Im not reset behavior");
    };
    const main = () => {
      window.setTimeout(cb, 3000);
    };

    const setTimeout = Sinon.stub(window, "setTimeout");
    // định nghĩa agrs thứ nhất là 1 callback
    setTimeout.callsArg(0);

    main();
    expect(window.setTimeout.called).to.be.equal(true);
    expect(window.setTimeout.args[0]).to.deep.equal([cb, 3000]);

    const obj = {
      mySetTimeOut(cb) {
        cb();
      },
    };

    Sinon.stub(obj, "mySetTimeOut");
    obj.mySetTimeOut.callsArg(0);

    obj.mySetTimeOut(function () {});
  });

  // it("should callThrough", function () {
  //   // Causes the original method wrapped into the stub to be called when none of the conditional stubs are matched.
  // });

  it("should callsArgOn", function () {
    // Like stub.callsArg(index); but with an additional parameter to pass the this context.
    let cb = () => {
      console.log("Im not reset behavior");
    };
    const main = () => {
      window.setTimeout(cb, 3000);
    };

    const setTimeout = Sinon.stub(window, "setTimeout");

    setTimeout.callsArgOn(0, {});

    main();

    // Example 2:
    const validator = {
      validate: function (cb) {
        const isValid = true;
        const error = {
          message: "This value is not valid",
        };
        cb(isValid, error);
      },
    };

    const body = () => {
      validator.validate(function (isValid, error) {
        if (isValid === true) {
          console.log("This form is valid");
        } else {
          console.log("Form error: " + error.message);
        }
      });
    };

    const validate = Sinon.stub(validator, "validate");
    // khi hàm cần stub có callback và mình muốn test flow trong callback đó
    // nếu như không thì có thể stub là pass hàm đó luôn
    // nếu như mà callback không cần truyền params thì có thể dùng callsArg, callsArgOn
    // nếu như callback cần truyền params thì nên callsArgWith
    validate.callsArgWith(0, false, { message: faker.animal.bear() });
    body();

    // chưa test dc cái callsArgOn
  });

  it("should pass timeout 1000", async function () {
    const clock = Sinon.useFakeTimers({
      toFake: ["setTimeout"],
    });

    setTimeout(() => {
      console.log("timeout 1000");
    }, 1000);

    setTimeout(() => {
      console.log("timeout 2000");
    }, 2000);

    // tất cả setTimeout giờ đều bị stub
    // clock.tickAsync hay clock.stick sẽ cho thời gian chạy tới 1 thời điểm nào đó 1000

    // clock.stick(1000)
    //  console.log("timeout 1000");

    // clock.stick(1200)
    //  console.log("timeout 1000");

    // clock.stick(2000)
    //  console.log("timeout 1000");
    //  console.log("timeout 2000");
    await clock.tickAsync(9000);
  });
});
