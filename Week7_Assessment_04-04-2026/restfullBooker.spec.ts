import { test } from "@playwright/test";
import restFullBookersDataJson from "./authdata.json";

//auth token generate
let baseUrl: string = restFullBookersDataJson.base_url;
let token: string;
let bookingid: number;
test("Auth Token", async ({ request }) => {
  let r1 = await request.post(`${baseUrl}/auth`, {
    data: {
      username: restFullBookersDataJson.username,
      password: restFullBookersDataJson.password,
    },
    headers: {
      "content-type": "application/json",
    },
  });
  let response = await r1.json();
  console.log(response);
  token = response.token;
  console.log(token);
});

//get all booking ids
test("get all booking ids", async ({ request }) => {
  let r1 = await request.get(`${baseUrl}/booking`, {});
  let response = await r1.json();
  console.log(response);
});

//get booking by id
test("get booking by id", async ({ request }) => {
  let r1 = await request.get(
    `${baseUrl}/booking/${restFullBookersDataJson.id}`,
  );
  let response = await r1.json();
  console.log(response);
});

test("post booking", async ({ request }) => {
  let r1 = await request.post(`${baseUrl}/booking`, {
    data: {
      firstname: restFullBookersDataJson.firstname,
      lastname: restFullBookersDataJson.lastname,
      totalprice: restFullBookersDataJson.totalprice,
      depositpaid: restFullBookersDataJson.depositpaid,
      bookingdates: {
        checkin: restFullBookersDataJson.bookingdates.checkin,
        checkout: restFullBookersDataJson.bookingdates.checkout,
      },
      additionalneeds: restFullBookersDataJson.additionalneeds,
    },
  });
  let response = await r1.json();
  console.log(response);
  bookingid = response.bookingid;
});

test("update booking", async ({ request }) => {
  let r1 = await request.put(`${baseUrl}/booking/${bookingid}`, {
    data: {
      firstname: restFullBookersDataJson.updateDetails.firstname,
      lastname: restFullBookersDataJson.updateDetails.lastname,
      totalprice: restFullBookersDataJson.updateDetails.totalprice,
      depositpaid: restFullBookersDataJson.updateDetails.depositpaid,
      bookingdates: {
        checkin: restFullBookersDataJson.updateDetails.bookingdates.checkin,
        checkout: restFullBookersDataJson.updateDetails.bookingdates.checkout,
      },
      additionalneeds: restFullBookersDataJson.updateDetails.additionalneeds,
    },
    headers: {
      "content-type": "application/json",
      cookie: `token=${token}`,
    },
  });
  let response = await r1.json();
  console.log(response);
});

test(" partial update data", async ({ request }) => {
  let r1 = await request.patch(`${baseUrl}/booking/${bookingid}`, {
    data: {
      firstname: restFullBookersDataJson.partial_updated_firstName,
      lastname: restFullBookersDataJson.partial_updated_lastName,
    },
    headers: {
      "content-type": "application/json",
      cookie: `token=${token}`,
    },
  });
  let response = await r1.json();
  console.log(response);
});

test("delete the booking", async ({ request }) => {
  let r1 = await request.delete(`${baseUrl}/booking/${bookingid}`, {
    headers: {
      "content-type": "application/json",
      // Authorization: `Basic ${token}`,
      cookie: `token=${token}`,
    },
  });

  let resText = await r1.text();
  console.log("Status:", r1.status(), "Body:", resText);
});
