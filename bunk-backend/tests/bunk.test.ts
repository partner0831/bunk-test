const request = require("supertest");
const requestURI = "http://localhost:3000";

const sendData = {
    expenses: [
        { name: "Adriana", amount: 5.75 },
        { name: "Adriana", amount: 5.75 },
        { name: "Bao", amount: 12 },
    ],
};

const response = {
    total: 23.5,
    equalShare: 11.75,
    payouts: [{ owes: "Adriana", owed: "Bao", amount: 0.25 }]
}

describe("Calculator", () => {
    it("It will return calculated how much each traveller needs to pay out to any other traveller.", async () => {
        const res = await request(requestURI).post("/payouts").send(sendData);
        expect(res.body).toStrictEqual(response);
    });
});
