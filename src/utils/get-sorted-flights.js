/**
 * takes an object and returns a new object with sorted dates
 *
 * @param {object} data - The object with flights
 * @returns {object} - returns a new object with sorted flights
 */

const getSortedFlights = (data) => {
    if (!data || !Array.isArray(data.flights)) return { data };

    // Sort flights based on departureDate 
    return {
        ...data,
        flights: data.flights
            .slice() // Create a copy to avoid modifying the original array
            .sort((a, b) => new Date(a.departureDate) - new Date(b.departureDate))
    };
};

export default getSortedFlights;
