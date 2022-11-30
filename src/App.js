import './App.css';
import {FormControlLabel, Radio, Checkbox} from "@mui/material";
import * as React from 'react';
import {useState} from 'react';
import shoeData from "./assets/shoe-data.json";
import Header from "./components/Header.js";
import CustomBar from "./components/CustomBar.js";
import ShoeCard from "./components/ShoeCard.js";
import Cart from "./components/Cart.js";

shoeData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  const TYPES = ["Sneaker", "Non-Sneaker"];
  const COLORS = ["Black", "White", "Grey", "Tan", "Green", "Red"];
  const SORT = ["Low to High", "High to Low"];
  const typeArray = []
  const colorArray = []

  const [typeState, setTypeState] = useState(
    {
        checkboxes: TYPES.reduce(
            (types, type) => ({
                ...types,
                [type]: false
            }),
            {}
        )
    }
  );

  const [colorState, setColorState] = useState(
    {
        checkboxes: COLORS.reduce(
            (types, type) => ({
                ...types,
                [type]: false
            }),
            {}
        )
    }
  );

  const [sortState, setSortState] = useState (
    {
      selectedOption: " "
    }
  );

  const [cart, setCart] = useState({prods: {}, total: 0});

  const handlePairs = (name, numPairs) => { 
    // numpairs - how many we get from clicking incrementor 
    // name - name of shoe 
    // {prods: {"Vans Sk8-HI": [1, 80]}}
    // numpairs: 1
    const updatedCartShoes = cart.prods;
    const price = updatedCartShoes[name][1]
    const countToUpdate = updatedCartShoes[name][0]+numPairs; // 1 + 1 = 2 
    updatedCartShoes[name][0] = countToUpdate; // {prods: "Vans Sk8-HI": [2, 80]}

    const updatedTotal = cart.total + (numPairs * price);
    setCart({prods: updatedCartShoes, total: updatedTotal});
  }

  const updateCart = (index) => {
    const shoe = displayData[index]; // a dict
    const name = shoe.name;
    const price = shoe.price;
    const updatedCartShoes = cart.prods; // list of dict

    if (updatedCartShoes[name]) {
      updatedCartShoes[name][0]+=1
    } else{
      updatedCartShoes[name] = [1, price]
    }

    const updatedTotal = cart.total + shoe.price; 
    setCart({prods: updatedCartShoes, total: updatedTotal});
  };

  const handleSort = (event) => {
    const name = event.target.name;

    setSortState(
      {
        selectedOption: name
      }
    )
  };

  const handleTypes = (event) => {
    const name = event.target.name;

    setTypeState(
        {
            checkboxes: {
                ...typeState.checkboxes,
                [name]: !typeState.checkboxes[name] 
            }
        }
    )
  };

  const handleColors = (event) => {
    const name = event.target.name;

    setColorState(
        {
            checkboxes: {
                ...colorState.checkboxes,
                [name]: !colorState.checkboxes[name] 
            }
        }
    )
  };

  const createSortRadios = () => {
    return(SORT.map(name => {
      return(
        <FormControlLabel 
        label={name}
        key={name}
        name={name}
        value="sort" 
        control={<Radio checked={sortState.selectedOption === name}/>} 
        onChange={handleSort}
        />
      )
    }));
  };

  const createCheckboxesTypes = () => {
    return(TYPES.map(name => {
      return(
        <FormControlLabel
        label={name}
        key={name}
        name={name}
        value="types" 
        control={<Checkbox checked={typeState.checkboxes[name]}/>}
        onChange={handleTypes}
        />
    );
    }));
  };

  const createCheckboxesColors = () => {
    return(COLORS.map(name => {
      return(
        <FormControlLabel
        label={name}
        key={name}
        name={name}
        value="color"
        control={<Checkbox checked={colorState.checkboxes[name]}/>}
        onChange={handleColors}
        />
    );
    }));
  };

  const isSelected = () => {
    const typeDict = typeState.checkboxes;
    const colorDict = colorState.checkboxes;

    for (var type in typeDict) {
      if (typeDict[type]) {
        typeArray.push(type);
      }
    }

    for (var color in colorDict) {
      if (colorDict[color]) {
        colorArray.push(color);
      }
    }
  };

  const findColor = (colorArray, colorsToSearch) => {
    return (colorsToSearch.some((color) => {
        return colorArray.indexOf(color) >= 0;
    }));
  };

  const filterBy = (item) => {
    if ((!typeArray.length == 0) && (!colorArray.length == 0)) {
      if (findColor(colorArray, item.color) && typeArray.includes(item.type)) {
        return item; 
      }
    } else if ((typeArray.length == 0) && (colorArray.length == 0)){
      return item;
    } else if (typeArray.length == 0) {
        if (findColor(colorArray, item.color)) {
          return item;
        }
    } else {
      if (typeArray.includes(item.type)) {
        return item; 
      }
    } 
  };
  
  const sortBy = (itemA, itemB) => {
    if (sortState.selectedOption === "Low to High") {
      return itemA.price - itemB.price;
    } else if (sortState.selectedOption === "High to Low") {
      return itemB.price - itemA.price; 
    }
  };

  const resetDisplay = () => {
    // const resetTypes = typeState;
    // const resetColors = colorState;
    // Object.keys(resetTypes.checkboxes).forEach(type => resetTypes.checkboxes[type] = false);
    // Object.keys(resetColors.checkboxes).forEach(color => resetColors.checkboxes[color] = false);
    setTypeState({
      checkboxes: TYPES.reduce(
        (types, type) => ({
            ...types,
            [type]: false
        }),
        {}
      )
    })
    // setTypeState(resetTypes);
    // setColorState(resetColors);
    // console.log(typeState);
    // console.log(colorState);
    setColorState({
      checkboxes: COLORS.reduce(
        (types, type) => ({
            ...types,
            [type]: false
        }),
        {}
    )
    })
  };

  isSelected();
  const sortedData = shoeData.sort(sortBy);
  const displayData = sortedData.filter(filterBy);

  const removeShoe = (name) => {
    const updatedCartShoes = cart.prods; 
    const totalShoeCost = cart.prods[name][1] * cart.prods[name][0];
    delete updatedCartShoes[name];
    const updatedTotal = cart.total - totalShoeCost; 
    setCart({prods: updatedCartShoes, total: updatedTotal});
  }

  const resetCart = () => {
    setCart({
      prods: {},
      total: 0
    })
  }

  return (
    <div className="App">
      <nav>
        <Header/>
      </nav>

      <main id="MainContent" className="flex flex-row p-8 gap-8">
          <aside>
            <CustomBar 
            resetDisplay={resetDisplay} 
            createCheckboxesColors={createCheckboxesColors}
            createCheckboxesTypes={createCheckboxesTypes} 
            createSortRadios={createSortRadios}/>
          </aside>

          <div id="Display" className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {displayData.map((shoe, index) => (
              <ShoeCard 
              key={index} 
              shoe={shoe} 
              updateCart={updateCart} 
              index={index}/>
            ))}
          </div>

          <aside id="cartCont">
            <Cart 
            resetCart={resetCart} 
            handlePairs={handlePairs} 
            prods={cart.prods} 
            removeShoe={removeShoe} 
            total={cart.total}/>
          </aside>
      </main>
    </div>
  );
}

export default App;
