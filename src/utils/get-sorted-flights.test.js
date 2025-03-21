import getSortedFlights from './get-sorted-flights.js';

describe('getSortedFlights', () => {
    test('sorts flights by departureDate', () => {
        const input = {
            flights: [
                { id: 1, departureDate: "2025-06-15T10:00:00Z", destination: "London" },
                { id: 2, departureDate: "2023-12-01T08:30:00Z", destination: "New York" },
                { id: 3, departureDate: "2024-03-22T15:45:00Z", destination: "Tokyo" }
            ]
        };

        const result = getSortedFlights(input);

        expect(result.flights).toEqual([
            { id: 2, departureDate: "2023-12-01T08:30:00Z", destination: "New York" },
            { id: 3, departureDate: "2024-03-22T15:45:00Z", destination: "Tokyo" },
            { id: 1, departureDate: "2025-06-15T10:00:00Z", destination: "London" }
        ]);
    });

    test('returns an empty flights array if input has no flights', () => {
        const input = { flights: [] };
        const result = getSortedFlights(input);
        expect(result.flights).toEqual([]);
    });

    test('does not modify the original input', () => {
        const input = {
            flights: [
                { id: 1, departureDate: "2025-06-15T10:00:00Z", destination: "London" },
                { id: 2, departureDate: "2023-12-01T08:30:00Z", destination: "New York" }
            ]
        };

        const copy = JSON.parse(JSON.stringify(input)); // Deep copy for comparison

        getSortedFlights(input);
        
        expect(input).toEqual(copy); // Ensure input remains unchanged
    });
});