let isPopulated = false; // flag variable to keep track of whether the select box has already been populated

async function populateSelectBox() {
  if (isPopulated) return; // exit if already populated
  
  const response = await fetch(
    'https://parseapi.back4app.com/classes/Carmodels_Car_Model_List?limit=10000&order=Model&keys=Make,Model',
    {
      headers: {
        'X-Parse-Application-Id': 'z8KIdu12dgjK985C72q8G1RUVumz4tOBIrafPU4K', // This is your app's application id
        'X-Parse-REST-API-Key': 'KVAkSdTUiyZrQINuKhnCWtFSvchIei0pof1IL9lI', // This is your app's REST API key
      }
    }
  );
  const data = await response.json(); // Here you have the data that you need
  
  const carModels = [];
  const modelMap = new Map(); // to keep track of models already added
  
  data.results.forEach(entry => {
    const makeModel = entry.Make + ' ' + entry.Model;
    if (!modelMap.has(makeModel)) { // only add unique models
      const index = carModels.push(makeModel) - 1; // add to array and get index
      modelMap.set(makeModel, index); // add to map
    }
  });
    
  const selectBox = document.getElementById("selectCarModel");
  
  carModels.forEach((model) => {
    const option = document.createElement("option");
    option.text = model;
    selectBox.add(option);
  });

  let selectedIndex = 0;
  selectBox.selectedIndex = selectedIndex;

  selectBox.addEventListener("keydown", (event) => {
    const keyCode = event.keyCode;
    if (keyCode === 38) { // Up arrow
      selectedIndex = Math.max(0, selectedIndex - 1);
    } else if (keyCode === 40) { // Down arrow
      selectedIndex = Math.min(carModels.length - 1, selectedIndex + 1);
    }
    selectBox.selectedIndex = selectedIndex;
  });
  
  isPopulated = true; // set flag variable to true after populating the select box
};
