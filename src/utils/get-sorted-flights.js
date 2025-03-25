/**
 * Takes an object and returns a new object with sorted dates in two directions up and down
 *
 * @param {object} data - The object with flights
 * @param {string} dataKey - The name of the key that we are sorting in the object
 * @param {boolean} upwards - The boolean th check the direction of sorting
 * @returns {object} - returns a new object with sorted flights
 */

const getSortedFlights = (data, dataKey = 'departureDate', upwards = true) => {
    if (!data || !Array.isArray(data.flights)) return { data };
    // Sort flights based on the key
    if(upwards){
    if (dataKey === 'stops') {
        // compare numbers
        return {
            ...data,
            flights: data.flights
                .slice() // Create a copy to avoid modifying the original array
                .sort((a, b) => a[dataKey] - b[dataKey])
        };
    } else if (dataKey === 'departureDate' || dataKey === 'arrivalDate') {
        //compare dates
        return {
            ...data,
            flights: data.flights
                .slice() // Create a copy to avoid modifying the original array
                .sort(
                    (a, b) =>
                        new Date(a[dataKey]).getTime() -
                        new Date(b[dataKey]).getTime()
                )
        };
    } else {
        //compare strings
        return {
            ...data,
            flights: data.flights
                .slice() // Create a copy to avoid modifying the original array
                .sort((a, b) => a[dataKey].localeCompare(b[dataKey]))
        };
    }
}else{
    if (dataKey === 'stops') {
        // compare numbers
        return {
            ...data,
            flights: data.flights
                .slice() // Create a copy to avoid modifying the original array
                .sort((a, b) => b[dataKey] - a[dataKey])
        };
    } else if (dataKey === 'departureDate' || dataKey === 'arrivalDate') {
        //compare dates
        return {
            ...data,
            flights: data.flights
                .slice() // Create a copy to avoid modifying the original array
                .sort(
                    (a, b) =>
                        new Date(b[dataKey]).getTime() -
                        new Date(a[dataKey]).getTime()
                )
        };
    } else {
        //compare strings
        return {
            ...data,
            flights: data.flights
                .slice() // Create a copy to avoid modifying the original array
                .sort((a, b) => b[dataKey].localeCompare(a[dataKey]))
        };
    }
}
};

export default getSortedFlights;
