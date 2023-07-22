var cars = {
  honda: {
    cars: {
      civic: {
        name: "Honda Civic",
        price: "$25,000",
        location: "New York",
        img: "Images/Honda/civic.jpg",
      },
      accord: {
        name: "Honda Accord",
        price: "$30,000",
        location: "Los Angeles",
        img: "Images/Honda/Accord.jpg",
      },
      crv: {
        name: "Honda CR-V",
        price: "$28,500",
        location: "Chicago",
        img: "Images/Honda/crv.jpg",
      },
      pilot: {
        name: "Honda Pilot",
        price: "$40,000",
        location: "Miami",
        img: "Images/Honda/Pilot.jpg",
      },
      hrv: {
        name: "Honda HR-V",
        price: "$23,500",
        location: "Seattle",
        img: "Images/Honda/HR-V.jpg",
      },
      odyssey: {
        name: "Honda Odyssey",
        price: "$35,000",
        location: "Dallas",
        img: "Images/Honda/odyssy.jpg",
      },
      fit: {
        name: "Honda Fit",
        price: "$20,000",
        location: "San Francisco",
        img: "Images/Honda/fit.jpg",
      },
      ridgeline: {
        name: "Honda Ridgeline",
        price: "$42,000",
        location: "Denver",
        img: "Images/Honda/Ridgeline.jpg",
      },
      insight: {
        name: "Honda Insight",
        price: "$27,500",
        location: "Boston",
        img: "Images/Honda/Insight.jpg",
      },
      passport: {
        name: "Honda Passport",
        price: "$37,000",
        location: "Atlanta",
        img: "Images/Honda/pasport.jpg",
      },
    },
  },
  toyota: {
    cars: {
      corolla: {
        name: "Toyota Corolla",
        price: "$24,000",
        location: "New York",
        img: "Images/Toyota/Toyota-Corolla-iM.jpg",
      },
      camry: {
        name: "Toyota Camry",
        price: "$28,500",
        location: "Los Angeles",
        img: "Images/Toyota/Toyota-Camry.jpg",
      },
      rav4: {
        name: "Toyota RAV4",
        price: "$31,000",
        location: "Chicago",
        img: "Images/Toyota/Toyota-RAV4.jpg",
      },
      Tacoma: {
        name: "Toyota Tacoma",
        price: "$39,000",
        location: "Miami",
        img: "Images/Toyota/Toyota-Tocoma.jpg",
      },
      Avalon: {
        name: "Toyota Avalon",
        price: "$36,500",
        location: "Seattle",
        img: "Images/Toyota/Toyota-Avalon-Hybrid.jpg",
      },
      Yaris: {
        name: "Toyota Yaris",
        price: "$37,500",
        location: "Dallas",
        img: "Images/Toyota/Toyota-Yaris-iA.jpg",
      },
      Sienna: {
        name: "Toyota Sienna",
        price: "$27,000",
        location: "San Francisco",
        img: "Images/Toyota/Toyota-Sienna.jpg",
      },
      Tundra: {
        name: "Toyota Tacoma",
        price: "$34,000",
        location: "Denver",
        img: "Images/Toyota/Toyota-Tundra.jpg",
      },
      Highlander: {
        name: "Toyota Highlander",
        price: "$38,500",
        location: "Boston",
        img: "Images/Toyota/Toyota-Highlander.jpg",
      },
      Prius : {
        name: "Toyota Prius",
        price: "$42,500",
        location: "Atlanta",
        img: "Images/Toyota/Toyota-Prius.jpg",
      },
    },
  },
  audi: {
    cars: {
      S5: {
        name: "Audi A3",
        price: "$35,000",
        location: "New York",
        img: "Images/Audi/Audi s5.jpg",
      },
      a4: {
        name: "Audi A4",
        price: "$40,000",
        location: "Los Angeles",
        img: "Images/Audi/audi_a4_2022_360x240.jpg",
      },
      a6: {
        name: "Audi A6",
        price: "$55,000",
        location: "Chicago",
        img: "Images/Audi/audi_a6_2019_360x240.jpg",
      },
      q3: {
        name: "Audi Q3",
        price: "$38,000",
        location: "Miami",
        img: "Images/Audi/audi-q3-5_360x240.jpg",
      },
      ETRON_2: {
        name: "Audi ETRON_2",
        price: "$45,000",
        location: "Seattle",
        img: "Images/Audi/auti-etron-2_360x240.jpg",
      },
      q8: {
        name: "Audi Q8",
        price: "$60,000",
        location: "Dallas",
        img: "Images/Audi/audi_q8_1_360x240.jpg",
      },
      rs_e_tron: {
        name: "Audi rs_sse-tron",
        price: "$70,000",
        location: "San Francisco",
        img: "Images/Audi/rs-e-tron-gt_360x240.jpg",
      },
      r8: {
        name: "Audi R8",
        price: "$170,000",
        location: "Denver",
        img: "Images/Audi/audi_r8_600x400.jpg",
      },
      A5: {
        name: "Audi A5",
        price: "$45,000",
        location: "Boston",
        img: "Images/Audi/audi_a5_600x400.jpg",
      },
    },
  },
};

var allCars = document.getElementById("allCars");

function allarsShow() {
  allCars.innerHTML = "";
    allCars.innerHTML =`
    <div class="heading-div" id="heading-div2">
    <img src="Images/pak-wheels-logo.svg" alt="" class="hyundai-heading-img">
</div>
`
    for (var main in cars) {
      for (var brand in cars[main]) {
        for (var type in cars[main][brand]) {
    allCars.innerHTML += `

  <div class="car-cards">
  <div class="car-img">
      <img src="${cars[main][brand][type].img}"  class="car-image">
  </div>
  <div class="car-txt">
      <a href="#" class="car-name">
          ${cars[main][brand][type].name}
      </a>
      <span class="car-price">
          USD ${cars[main][brand][type].price}
      </span>
      <span class="car-loc">
          ${cars[main][brand][type].location}
      </span>
  </div>
  </div>

  `
            

        }
      }
    }
}

  allarsShow();


function showCars(category) {
  allCars.innerHTML = "";
  allCars.innerHTML = `
    <div class="heading-div" id="heading-div2">
      <img src="Images/pak-wheels-logo.svg" alt="" class="hyundai-heading-img">
    </div>
  `;

  var carsList;
  if (category === "all") {
    carsList = Object.values(cars).map((brand) => Object.values(brand.cars)).flat();
  } else {
    carsList = Object.values(cars[category].cars);
  }

  for (var i = 0; i < carsList.length; i++) {
    var car = carsList[i];
    allCars.innerHTML += `
      <div class="car-cards">
        <div class="car-img">
          <img src="${car.img}" class="car-image">
        </div>
        <div class="car-txt">
          <a href="#" class="car-name">${car.name}</a>
          <span class="car-price">USD ${car.price}</span>
          <span class="car-loc">${car.location}</span>
        </div>
      </div>
    `;
  }
}
