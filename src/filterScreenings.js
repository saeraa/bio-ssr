export default function filterScreenings(data) {
    const filteredScreenings = [];
		data.forEach(screening => {
			const currentScreeningDate = new Date(screening.attributes.start_time)
			const startingPoint =  new Date(Date.now() + 86400000);
			startingPoint.setHours(0)
			startingPoint.setMinutes(0)
			startingPoint.setSeconds(0)
			startingPoint.setMilliseconds(0)
			
			const endPoint = new Date(Date.now() + 518400000);
			endPoint.setHours(0)
			endPoint.setMinutes(0)
			endPoint.setSeconds(0)
			endPoint.setMilliseconds(0)
		
			if(currentScreeningDate.getTime() > startingPoint.getTime() && currentScreeningDate.getTime() < endPoint.getTime()) {
				filteredScreenings.push(screening);
			}

			filteredScreenings.sort(function(a,b) {
				const first = new Date(a.attributes.start_time).getTime();
				const second = new Date(b.attributes.start_time).getTime();
				if(first < second) {
					return -1;
				} 
				else if (first > second ){
					return 1;
				}
				return 0;
			});
			
			if(filteredScreenings.length > 10) {
				filteredScreenings.splice(10);
			}
		
		});
        return filteredScreenings;
}