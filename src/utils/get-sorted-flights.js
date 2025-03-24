/**
 * takes an object and returns a new object with sorted dates
 *
 * @param {object} data - The object with flights
 * @param {string} dataKey - The name of the key that we are sorting in the object
 * @returns {object} - returns a new object with sorted flights
 */

const getSortedFlights = (data, dataKey = 'departureDate') => {
    if (!data || !Array.isArray(data.flights)) return { data };

    // Sort flights based on the key
    return {
        ...data,
        flights: data.flights
            .slice() // Create a copy to avoid modifying the original array
            .sort((a, b) => a[dataKey].localeCompare(b[dataKey]))
    };
};

export default getSortedFlights;
