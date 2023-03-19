export async function getUpcomingScreenings(screenings) {
  const date = new Date();
  const data = screenings.data;
  const upcomingScreenings = [];

  for (let i = 0; i < data.length; i++) {
    if (Date.parse(data[i].attributes.start_time) > date) {
      const screening = {
        start_time: data[i].attributes.start_time,
        room: data[i].attributes.room,
      };
      upcomingScreenings.push(screening);
    }
  }
  return upcomingScreenings;
}
