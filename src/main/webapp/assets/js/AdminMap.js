const SetDynamicMap = (img, type) => {
  var map = L.map("mapid").setView([20.5937, 78.9629], 5);
  let AreaMap = document.querySelector(".area_map h1");
  const ReturnAreaName = (AreaName, type) => {
    if (type == "area") {
      AreaMap.textContent = AreaName;
    } else {
      document.querySelector(".type_locationm").textContent = AreaName;
    }
  };
  map.options.minZoom = 10;
  let Locations = [
    {
      area: type != "area" ? "MH05CD 2634" : "andhere",
      lat: "19.1136",
      long: "72.8697",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Airoli",
      lat: "19.1590",
      long: "72.9986",
    },

    {
      area: type != "area" ? "MH05CD 2634" : "Bandra",
      lat: "19.0596",
      long: "72.8295",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Belapur",
      lat: "19.0237",
      long: "73.04102",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Bhandup",
      lat: "19.1511",
      long: "72.9372",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Borivali",
      lat: "19.2307",
      long: "72.8567",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Byculla",
      lat: "18.9750",
      long: "72.8295",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Charni Road",
      lat: "18.9518",
      long: "72.8184",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Chembur",
      lat: "19.0522",
      long: "72.9005",
    },
    // break
    {
      area: type != "area" ? "MH05CD 2634" : "Colaba",
      lat: "18.9067",
      long: "72.8147",
    },

    {
      area: type != "area" ? "MH05CD 2634" : "Dadar",
      lat: "19.0178",
      long: "72.8478",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Dahisar",
      lat: "19.2575",
      long: "72.8650",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Diva",
      lat: "19.1889",
      long: "73.0431",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Dombivli",
      lat: "19.3826",
      long: "73.0809",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Fort",
      lat: "18.9345",
      long: "72.8371",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Juinagar",
      lat: "19.0553",
      long: "73.0159",
    },

    //   layer
    {
      area: type != "area" ? "MH05CD 2634" : "Ghansoli",
      lat: "19.1254",
      long: "72.9992",
    },

    {
      area: type != "area" ? "MH05CD 2634" : "Ghatkopar",
      lat: "19.0790",
      long: "72.9080",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Vidyavihar",
      lat: "19.0798",
      long: "72.8973",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Goregaon",
      lat: "19.1663",
      long: "72.8526",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Jogeshwari",
      lat: "19.1439",
      long: "72.8428",
    },

    //   layer

    {
      area: type != "area" ? "MH05CD 2634" : "Juhu",
      lat: "19.1075",
      long: "72.8263",
    },

    {
      area: type != "area" ? "MH05CD 2634" : "Kalwa",
      lat: "19.2022",
      long: "73.0025",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Kanjurmarg",
      lat: "19.1294",
      long: "72.9330",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Khar",
      lat: "19.0700",
      long: "72.8338",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Koparkhairane",
      lat: "19.1034",
      long: "73.0113",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Kharghar",
      lat: "19.047321",
      long: "73.069908",
    },

    //   layer

    {
      area: type != "area" ? "MH05CD 2634" : "Malabar Hill",
      lat: "18.9548",
      long: "72.7985",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Mahalaxmi",
      lat: "19.028082",
      long: "72.844902",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Madh",
      lat: "19.1640",
      long: "72.7895",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Lower Parel",
      lat: "18.9977",
      long: "72.8376",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Kurla",
      lat: "19.0726",
      long: "72.8845",
    },

    //   layer

    {
      area: type != "area" ? "MH05CD 2634" : "Malad",
      lat: "19.1874",
      long: "72.8484",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Marine Lines",
      lat: "18.9431",
      long: "72.8272",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Masjid",
      lat: "18.9506",
      long: "72.8383",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Matunga",
      lat: "19.0269",
      long: "72.8553",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "mira bhayandar",
      lat: "19.295233",
      long: "72.854393",
    },

    //   layer

    {
      area: type != "area" ? "MH05CD 2634" : "Nariman Point",
      lat: "18.9256",
      long: "72.8242",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Nerul",
      lat: "19.035577",
      long: "73.022817",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Mumbra",
      lat: "19.1761",
      long: "73.0229",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Mumbai Central",
      lat: "18.9690",
      long: "72.8205",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Mulund",
      lat: "19.1765",
      long: "72.9475",
    },

    //   layer

    {
      area: type != "area" ? "MH05CD 2634" : "Powai",
      lat: "19.1176",
      long: "72.9060",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Navi",
      lat: "19.0330",
      long: "73.0297",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Saki Naka",
      lat: "19.0962",
      long: "72.8877",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Santacruz",
      lat: "19.0843",
      long: "72.8360",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Sewri",
      lat: "18.9924",
      long: "72.8547",
    },

    {
      area: type != "area" ? "MH05CD 2634" : "Sion",
      lat: "19.0390",
      long: "72.8619",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Thane",
      lat: "19.218330",
      long: "72.8777",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "turbhe",
      lat: "19.0330",
      long: "73.0297",
    },

    //   layer
    {
      area: type != "area" ? "MH05CD 2634" : "Vashi",
      lat: "19.0745",
      long: "72.9978",
    },

    {
      area: type != "area" ? "MH05CD 2634" : "Vikhroli",
      lat: "19.1142",
      long: "72.9358",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Vile Parle",
      lat: "19.0968",
      long: "72.8517",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Wadala",
      lat: "19.0149",
      long: "72.86317",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Worli",
      lat: "18.9986",
      long: "72.8174",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Dharavi",
      lat: "19.0380",
      long: "72.8538",
    },
    {
      area: type != "area" ? "MH05CD 2634" : "Nahur",
      lat: "19.1553",
      long: "72.9438",
    },
  ];
  var LeafIcon = new L.icon({
    iconUrl: img,
    iconSize: [58, 58],
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "",
  }).addTo(map);
  map.flyTo([19.076, 72.8777], 12);
  let MumbaiMarket = L.marker([19.076, 72.8777], { icon: LeafIcon })
    .addTo(map)
    .bindPopup("Mumbai");

  MumbaiMarket._icon.classList.add("huechange");
  Locations.forEach((EachLocation) => {
    L.marker([EachLocation.lat, EachLocation.long], { icon: LeafIcon })
      .addTo(map)
      .on("click", (e) => {
        ReturnAreaName(EachLocation.area, type);
      })
      .bindPopup(EachLocation.area);
  });

  document.querySelectorAll(".leaflet-marker-pane img").forEach((EachImg) => {
    EachImg.addEventListener("click", (e) => {
      document
        .querySelectorAll(".leaflet-marker-pane img")
        .forEach((EachImg) => {
          EachImg.classList.remove("active");
        });
      e.target.classList.add("active");
    });
  });
};

const map_dynamic = document.querySelector("#map_dynamic");

map_dynamic.addEventListener("change", (e) => {
  let Value = e.target.value;

  let SearchBody = document.querySelector(".search_body_area");
  let Map = document.querySelector("#mapid");
  Map.remove();

  let MapHTML = `
  <div id="mapid"></div>
  `;
  SearchBody.insertAdjacentHTML("beforeend", MapHTML);
  if (Value == "Vehicle") {
    document.querySelector(".name_location").textContent = "Vehicle";
    document.querySelector(".type_locationm").textContent = "MH05CD 2634";
    document.querySelector(
      ".location_wrapper_map"
    ).innerHTML = `<i class="fa-solid fa-car-side"></i>`;
    SetDynamicMap("./assets/img/bohni vehilce APP.png", "vehicle");
  } else {
    // MH05CD2453
    document.querySelector(".name_location").textContent = "Thane";
    document.querySelector(".type_locationm").textContent = "Area";
    document.querySelector(
      ".location_wrapper_map"
    ).innerHTML = `<i class="fa-solid fa-location-dot"></i>`;
    SetDynamicMap("./assets/img/location-mark (1).png", "area");
  }
});

SetDynamicMap("./assets/img/location-mark (1).png", "area");
