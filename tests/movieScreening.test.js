import { describe, it, jest, expect } from "@jest/globals";
import { getUpcomingScreenings } from "../src/movieScreening.js";

describe("getUpcomingScreenings", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2023-03-19T03:00:00.000Z"));
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it("returns screenings of upcoming screenings", async () => {
    const mockMovieScreenings = {
      data: [
        {
          id: 70,
          attributes: {
            start_time: "2023-03-12T12:00:00.000Z",
            room: "Stora salongen",
            createdAt: "2023-02-21T13:10:31.674Z",
            updatedAt: "2023-02-21T13:10:31.674Z",
          },
        },
        {
          id: 56,
          attributes: {
            start_time: "2023-04-03T19:00:00.000Z",
            room: "Stora salongen",
            createdAt: "2023-02-21T13:10:23.143Z",
            updatedAt: "2023-02-21T13:10:23.143Z",
          },
        },
        {
          id: 84,
          attributes: {
            start_time: "2023-03-18T17:00:00.000Z",
            room: "Stora salongen",
            createdAt: "2023-03-12T15:56:05.121Z",
            updatedAt: "2023-03-12T15:56:05.121Z",
          },
        },
        {
          id: 35,
          attributes: {
            start_time: "2023-03-21T19:00:00.000Z",
            room: "Stora salongen",
            createdAt: "2023-01-31T04:27:20.714Z",
            updatedAt: "2023-01-31T04:27:20.714Z",
          },
        },
        {
          id: 28,
          attributes: {
            start_time: "2023-02-16T19:00:00.000Z",
            room: "Stora salongen",
            createdAt: "2023-01-31T04:27:16.312Z",
            updatedAt: "2023-01-31T04:27:16.312Z",
          },
        },
      ],
    };

    const screenings = await getUpcomingScreenings(mockMovieScreenings);

    expect(screenings.length).toBe(2);
    expect(screenings.length).toBe(2);
    expect(Date.parse(screenings[0].start_time)).toBeGreaterThan(
      new Date().getTime()
    );
    expect(Date.parse(screenings[1].start_time)).toBeGreaterThan(
      new Date().getTime()
    );
  });
});
