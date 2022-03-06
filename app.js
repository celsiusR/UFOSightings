// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// Step 1. Track of all the object filters.
var filters = {};

// Step 2 Update the filters and replace handleClick. 
function updateFilters() {

    // Step 4a
  let changedElement = d3.select(this);
    // Step 4b
  let elementValue = changedElement.property("value");
  console.log(elementValue);
    //  Step 4c Save the id of the filter 
  let filterId = changedElement.attr("id");
    // Step 5. for logic and value of  filterId and value of
    // to the filters list. 
    // Else clear that filter from the filters object.
  if (elementValue) {
    filters[filterId] = elementValue;
  }
  else {
    delete filters[filterId];
  }
  
    // Step 6. Apply all filters and rebuild the table
    filterTable();
  
  }
  
  // Step 7. function will filter the table data based on input provided
  function filterTable() {
  
    // Step 8. Set the filtered data to the tableData.
    var filteredData = tableData;
  
    // Step 9. Loop through all of the data that
    // is a match of the filter values
    Object.entries(filters).forEach(([key, value]) => {
      filteredData = filteredData.filter(row => row[key] === value);
    });

    // Step 10. Reassemble the table using the filtered data
    buildTable(filteredData);
  }
    
  // Attach  the onchange event listnered for changes to each filter
  d3.selectAll("input").on("change", updateFilters);
  
  // Build the table for the page to reload
  buildTable(tableData);