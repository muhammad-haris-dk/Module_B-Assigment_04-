let mobile_Information = [
  {
    brand: "samsung",
    model: "samsungA30",
    price: "40000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
  {
    brand: "samsung",
    model: "samsungA10",
    price: "40000",
    camera: "40px",
    ram: "4gb",
    rom: "128gb",
  },
  {
    brand: "samsung",
    model: "samsungA20",
    price: "40000",
    camera: "40px",
    ram: "4gb",
    rom: "128gb",
  },
  {
    brand: "vivo",
    model: "vivoY20",
    price: "20000",
    camera: "40px",
    ram: "2gb",
    rom: "32gb",
  },
  {
    brand: "vivo",
    model: "vivoY11",
    price: "20000",
    camera: "40px",
    ram: "3gb",
    rom: "32gb",
  },
  {
    brand: "vivo",
    model: "vivoY15",
    price: "30000",
    camera: "40px",
    ram: "4gb",
    rom: "64gb",
  },
  {
    brand: "motorola",
    model: "motorola123",
    price: "5000",
    camera: "2px",
    ram: "2gb",
    rom: "32gb",
  },
  {
    brand: "iphone",
    model: "iphone12",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
  {
    brand: "iphone",
    model: "iphone13",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
  {
    brand: "iphone",
    model: "iphoneX",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
];

const input = document.getElementById("input");
const select = document.getElementById("select").value;
const Mobile_Lists = document.getElementById("Mobile_Lists");
const button = document.getElementById("button");

const renderSearchResult = () => {
  // console.log(`${select} ${input.value}`);
  const obj_Filter = mobile_Information.filter((h) => {
    let search_Value = h[select];
    return search_Value.includes(input.value.toLowerCase());
  });
  if (obj_Filter.length > 0) {
    Mobile_Lists.innerHTML = "";
    obj_Filter.forEach((h) => {
      Mobile_Lists.innerHTML +=`
         <li class="list">Brand: ${h.brand}</li>   
         <li class="list">Model: ${h.model}</li>   
         <li class="list">Price: RS:${h.price}</li>   
         <li class="list">Camera: ${h.camera}</li>   
         <li class="list">Ram: ${h.ram} GB</li>   
         <li class="list">Rom: ${h.rom} GB</li> 
         <hr>  
      `
    })
  }
  else{
    Mobile_Lists.innerHTML = `No Result Found`
  }
};
