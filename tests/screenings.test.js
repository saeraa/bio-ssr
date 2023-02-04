import { describe, expect, test, beforeEach, afterEach, jest } from "@jest/globals";
import filterScreenings from "../src/filterScreenings.js";

const dummyData = [
    {"id":1,"attributes":{"start_time":"2023-01-01T17:00:00.000Z","room":"Stora salongen","createdAt":"2023-01-31T04:27:02.786Z","updatedAt":"2023-01-31T04:27:02.786Z"}},
    {"id":2,"attributes":{"start_time":"2023-01-05T17:00:00.000Z","room":"Stora salongen","createdAt":"2023-01-31T04:27:02.786Z","updatedAt":"2023-01-31T04:27:02.786Z"}},
    {"id":3,"attributes":{"start_time":"2023-01-05T17:00:00.000Z","room":"Stora salongen","createdAt":"2023-01-31T04:27:02.786Z","updatedAt":"2023-01-31T04:27:02.786Z"}},
    {"id":4,"attributes":{"start_time":"2023-01-06T17:00:00.000Z","room":"Stora salongen","createdAt":"2023-01-31T04:27:02.786Z","updatedAt":"2023-01-31T04:27:02.786Z"}},
    {"id":5,"attributes":{"start_time":"2023-01-06T17:00:00.000Z","room":"Stora salongen","createdAt":"2023-01-31T04:27:02.786Z","updatedAt":"2023-01-31T04:27:02.786Z"}},
    {"id":6,"attributes":{"start_time":"2023-01-06T17:00:00.000Z","room":"Stora salongen","createdAt":"2023-01-31T04:27:02.786Z","updatedAt":"2023-01-31T04:27:02.786Z"}},
    {"id":7,"attributes":{"start_time":"2023-01-06T17:00:00.000Z","room":"Stora salongen","createdAt":"2023-01-31T04:27:02.786Z","updatedAt":"2023-01-31T04:27:02.786Z"}},
    {"id":8,"attributes":{"start_time":"2023-01-06T17:00:00.000Z","room":"Stora salongen","createdAt":"2023-01-31T04:27:02.786Z","updatedAt":"2023-01-31T04:27:02.786Z"}},
    {"id":9,"attributes":{"start_time":"2023-01-06T17:00:00.000Z","room":"Stora salongen","createdAt":"2023-01-31T04:27:02.786Z","updatedAt":"2023-01-31T04:27:02.786Z"}},
    {"id":10,"attributes":{"start_time":"2023-01-06T17:00:00.000Z","room":"Stora salongen","createdAt":"2023-01-31T04:27:02.786Z","updatedAt":"2023-01-31T04:27:02.786Z"}},
    {"id":11,"attributes":{"start_time":"2023-01-06T17:00:00.000Z","room":"Stora salongen","createdAt":"2023-01-31T04:27:02.786Z","updatedAt":"2023-01-31T04:27:02.786Z"}},
    {"id":12,"attributes":{"start_time":"2023-01-07T17:00:00.000Z","room":"Stora salongen","createdAt":"2023-01-31T04:27:02.786Z","updatedAt":"2023-01-31T04:27:02.786Z"}},
    {"id":12,"attributes":{"start_time":"2023-01-23T17:00:00.000Z","room":"Stora salongen","createdAt":"2023-01-31T04:27:02.786Z","updatedAt":"2023-01-31T04:27:02.786Z"}}
];

describe("filterScreenings()", ()=> {
    beforeEach(()=> {
        jest.useFakeTimers();
        jest.setSystemTime(new Date("2023-01-01"));
    });

    afterEach(()=> {
        jest.setSystemTime(new Date());
    });
    
    test("Only screenings for next five days should remain", ()=> {
        const filteredData = filterScreenings(dummyData);
        console.log(filteredData.length)
        expect(filteredData.length).toBe(10);
    });
});