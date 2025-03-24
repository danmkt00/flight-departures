import data from './data.js';
import getSortedFlights from './utils/get-sorted-flights.js';

const dom = {
    flightsContainer: document.getElementById('flights-container')
};

document.addEventListener('DOMContentLoaded', () => {
    let myFlights = { ...data }; //my data with flights

    // Create a table
    const table = document.createElement('table');
    table.classList.add('flights-table');

    // Create table header
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    // Keys for the column names
    const columnNames = {
        name: 'Flight Name',
        plane: 'Plane',
        departureDate: 'Departure Date',
        origin: 'Origin',
        arrivalDate: 'Arrival Date',
        destination: 'Destination',
        stops: 'Stops'
    };

    // Function to render the table body
    const renderTableBody = (flights) => {
        const tbody = document.createElement('tbody');

        flights.forEach((flight) => {
            const row = document.createElement('tr');

            Object.keys(columnNames).forEach((key) => {
                const td = document.createElement('td');
                td.textContent = flight[key];
                row.appendChild(td);
            });

            tbody.appendChild(row);
        });
        return tbody;
    };

    Object.entries(columnNames).forEach(([key, name]) => {
        const th = document.createElement('th');
        th.textContent = name;
        th.dataset.column = key; // Store the column key for reference

        th.classList.add('clickable-header'); // Add class for styling

        th.addEventListener('click', () => {
            //console.log(`Clicked on column: ${key}`);
            myFlights = getSortedFlights(myFlights, key);
            //console.log(myFlights);  //to check the new Array
            const tbody = renderTableBody(myFlights.flights);
            table.replaceChild(tbody, table.querySelector('tbody'));
        });

        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = renderTableBody(myFlights.flights);
    table.appendChild(tbody);
    dom.flightsContainer.appendChild(table);
});
