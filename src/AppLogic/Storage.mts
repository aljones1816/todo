// module for performing basic CRUD operations with local storage

function readData(schema: string) {
  let fetchedData = JSON.parse(window.localStorage.getItem(schema) || "[]");
  return fetchedData;
}

function createData(schema: string, newData: object) {
  let currentdata = readData(schema);
  currentdata.push(newData);
  window.localStorage.setItem(schema, JSON.stringify(currentdata));
}

// TODO remove reliance on any typed objects for delete and update.
function deleteData(schema: string, id: string) {
  let currentdata = readData(schema);
  currentdata.splice(
    currentdata.findIndex((data: any) => data.id === id),
    1
  );
  window.localStorage.setItem(schema, JSON.stringify(currentdata));
}

function updateData(schema: string, id: string, newData: object) {
  let currentdata = readData(schema);
  currentdata[currentdata.findIndex((data: any) => data.id === id)] = newData;
  window.localStorage.setItem(schema, JSON.stringify(currentdata));
}

export { readData, createData, deleteData, updateData };
