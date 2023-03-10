# Bunk Dev Test - Holiday Expenses Calculator

A code challenge for new developers applying to work at Bunk.

## Challenge

The Bunk team are all going on a work holiday but they need an app to keep a track of expenses and who owes money to who at the end of the trip.

## Technologies To Use

- TypeScript preferably, (JavaScript if not familiar with TypeScript)
- Angular 14+
- Node 14+ + Web Framework, i.e. Express
- Backend tests (ideally with Jest)
- E2E tests (ideally with Cypress)
- Git + Github for version control

## Challenge Requirements

- The client-side should be built using Angular
- The client-side should contain a table showing a expenses with the following fields (per traveller):
  - Name
  - Expense
- You should be able to add an expense to the table (not persisted).
- The page should then have a "Settle Up" button.
- When the "Settle Up" button is clicked, it will make a request to the server to calculate how much each traveller needs to pay out to any other traveller
- The server-side should be a NodeJS Web API.
- The NodeJS server-side logic should be arranged into a service.
- There is no need for a database.

### Bonus Requirements

- If you have time, you should write tests.
- Linting is appreciated, ideally with prettier.
- Tidy, well documented functions are great.

## Installation

Run `npm run install-all` in the project root.

This script will kick off `npm install` in both the Express server (`api`) and the Angular application (`web`).

## Quick Start

Run `npm run start` from the project root. This script will start both the Express server, and the Angular application.

## Running Tests

Run server-side tests with `npm test` from the project root.
Run E2E tests with the `npm run e2e` command from project root.

## API Reference

### Calculate Payouts (`POST /payouts`)

**Endpoint URL**
`http://localhost:3000/payouts`

**JSON Body Parameters**

`expenses` - array : Specifies the expenses you want to calculate a payout on.

`expenses.name` - string : The name of the person who incurred the expense.

`expenses.amount` - number : The amount of the expense incurred.

**Example Request**

```shell script
curl --location --request POST 'localhost:3000/payouts' \
--header 'Content-Type: application/json' \
--data-raw '{
	"expenses": [
		{ "name": "Adriana", "amount": 5.75 },
		{ "name": "Adriana", "amount": 5.75 },
		{ "name": "Bao", "amount": 12 }
	]
}'
```

**Example Response**

```json
{
  "total": 23.5,
  "equalShare": 11.75,
  "payouts": [
    {
      "owes": "Adriana",
      "owed": "Bao",
      "amount": 0.25
    }
  ]
}
```
