describe("createNumForCheckSum", function() {
  it("doubles every other number from the end", function() {
    createNumForCheckSum(1234).should.equal(2264);
  });

  it("adds the two doubled digits together if they're greater than 10", function() {
    createNumForCheckSum(1685).should.equal(2675);
  });
});

describe("checkSum", function() {
  it("add all the new digits", function() {
    checkSum(1685).should.equal(20);
  });
});

describe("accountNumberCheck", function() {
  it("checks to make sure an account number is valid", function() {
    accountNumberCheck(79927398713).should.be.true;
  });
});
