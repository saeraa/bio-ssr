/*Filters out ten screenings in the next five days or removes the last day's screenings incase
the number of screenings pushes the total number of screenings to more than ten*/
export function filterScreenings(data) {
  let filteredScreenings = [];
  data.forEach((screening) => {
    
    // Setting a starting data for the next day to start displaying screenings
    const currentScreeningDate = new Date(screening.attributes.start_time);
    const startingPoint = new Date(Date.now() + 86400000);
    startingPoint.setHours(0);
    startingPoint.setMinutes(0);
    startingPoint.setSeconds(0);
    startingPoint.setMilliseconds(0);

    //Setting an end date for the screenings to be displayed
    const endPoint = new Date(Date.now() + 518400000);
    endPoint.setHours(0);
    endPoint.setMinutes(0);
    endPoint.setSeconds(0);
    endPoint.setMilliseconds(0);

    //Only add screenings between the start and end dates
    if (
      currentScreeningDate.getTime() > startingPoint.getTime() &&
      currentScreeningDate.getTime() < endPoint.getTime()
    ) {
      filteredScreenings.push(screening);
    }
  });

  //Sort the screenings by date incase they come back unsorted from the API
  filteredScreenings = sortScreenings(filteredScreenings);

  
  //Logic for handling the case when there are more than ten screenings with valid dates
  if (filteredScreenings.length > 10) {
    
    //Checks if whole days of screenings can be shown
    //Incase the last day's screenings exceeds ten removes all screenings from that day
    if (
      filteredScreenings[9].attributes.start_time.split("T")[0] !=
      filteredScreenings[10].attributes.start_time.split("T")[0]
    ) {
      filteredScreenings.splice(10);
    } else {
      filteredScreenings.splice(11);
      filteredScreenings = filteredScreenings.filter((s) => {
        return (
          s.attributes.start_time.split("T")[0] !=
          filteredScreenings[9].attributes.start_time.split("T")[0]
        );
      });
    }
  }
  return filteredScreenings;
}

/*Sorts screenings by starting time*/
export function sortScreenings(data) {
    data.sort(function (a, b) {
        const first = new Date(a.attributes.start_time).getTime();
        const second = new Date(b.attributes.start_time).getTime();
        if (first < second) {
          return -1;
        } else if (first > second) {
          return 1;
        }
        return 0;
      });
      return data;
}
