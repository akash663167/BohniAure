var map = L.map("mapid").setView([20.5937, 78.9629], 5);
let AreaMap = document.querySelector(".area_map p");
let audience = document.querySelector(".audience_count p");
const ReturnAreaName = (AreaName,audienceCount) => {
    AreaMap.textContent = AreaName;
    audience.textContent = audienceCount;
};
map.options.minZoom = 10;
let Locations = [
    {
        area: "andhere",
        lat: "19.1136",
        long: "72.8697",
    },
    {
        area: "Airoli",
        lat: "19.1590",
        long: "72.9986",
    },

    {
        area: "Bandra",
        lat: "19.0596",
        long: "72.8295",
    },
    {
        area: "Belapur",
        lat: "19.0237",
        long: "73.04102",
    },
    {
        area: "Bhandup",
        lat: "19.1511",
        long: "72.9372",
    },
    {
        area: "Borivali",
        lat: "19.2307",
        long: "72.8567",
    },
    {
        area: "Byculla",
        lat: "18.9750",
        long: "72.8295",
    },
    {
        area: "Charni Road",
        lat: "18.9518",
        long: "72.8184",
    },
    {
        area: "Chembur",
        lat: "19.0522",
        long: "72.9005",
    },
    // break
    {
        area: "Colaba",
        lat: "18.9067",
        long: "72.8147",
    },

    {
        area: "Dadar",
        lat: "19.0178",
        long: "72.8478",
    },
    {
        area: "Dahisar",
        lat: "19.2575",
        long: "72.8650",
    },
    {
        area: "Diva",
        lat: "19.1889",
        long: "73.0431",
    },
    {
        area: "Dombivli",
        lat: "19.3826",
        long: "73.0809",
    },
    {
        area: "Fort",
        lat: "18.9345",
        long: "72.8371",
    },
    {
        area: "Juinagar",
        lat: "19.0553",
        long: "73.0159",
    },

    //   layer
    {
        area: "Ghansoli",
        lat: "19.1254",
        long: "72.9992",
    },

    {
        area: "Ghatkopar",
        lat: "19.0790",
        long: "72.9080",
    },
    {
        area: "Vidyavihar",
        lat: "19.0798",
        long: "72.8973",
    },
    {
        area: "Goregaon",
        lat: "19.1663",
        long: "72.8526",
    },
    {
        area: "Jogeshwari",
        lat: "19.1439",
        long: "72.8428",
    },

    //   layer

    {
        area: "Juhu",
        lat: "19.1075",
        long: "72.8263",
    },

    {
        area: "Kalwa",
        lat: "19.2022",
        long: "73.0025",
    },
    {
        area: "Kanjurmarg",
        lat: "19.1294",
        long: "72.9330",
    },
    {
        area: "Khar",
        lat: "19.0700",
        long: "72.8338",
    },
    {
        area: "Koparkhairane",
        lat: "19.1034",
        long: "73.0113",
    },
    {
        area: "Kharghar",
        lat: "19.047321",
        long: "73.069908",
    },

    //   layer

    {
        area: "Malabar Hill",
        lat: "18.9548",
        long: "72.7985",
    },
    {
        area: "Mahalaxmi",
        lat: "19.028082",
        long: "72.844902",
    },
    {
        area: "Madh",
        lat: "19.1640",
        long: "72.7895",
    },
    {
        area: "Lower Parel",
        lat: "18.9977",
        long: "72.8376",
    },
    {
        area: "Kurla",
        lat: "19.0726",
        long: "72.8845",
    },

    //   layer

    {
        area: "Malad",
        lat: "19.1874",
        long: "72.8484",
    },
    {
        area: "Marine Lines",
        lat: "18.9431",
        long: "72.8272",
    },
    {
        area: "Masjid",
        lat: "18.9506",
        long: "72.8383",
    },
    {
        area: "Matunga",
        lat: "19.0269",
        long: "72.8553",
    },
    {
        area: "mira bhayandar",
        lat: "19.295233",
        long: "72.854393",
    },

    //   layer

    {
        area: "Nariman Point",
        lat: "18.9256",
        long: "72.8242",
    },
    {
        area: "Nerul",
        lat: "19.035577",
        long: "73.022817",
    },
    {
        area: "Mumbra",
        lat: "19.1761",
        long: "73.0229",
    },
    {
        area: "Mumbai Central",
        lat: "18.9690",
        long: "72.8205",
    },
    {
        area: "Mulund",
        lat: "19.1765",
        long: "72.9475",
    },

    //   layer

    {
        area: "Powai",
        lat: "19.1176",
        long: "72.9060",
    },
    {
        area: "Navi",
        lat: "19.0330",
        long: "73.0297",
    },
    {
        area: "Saki Naka",
        lat: "19.0962",
        long: "72.8877",
    },
    {
        area: "Santacruz",
        lat: "19.0843",
        long: "72.8360",
    },
    {
        area: "Sewri",
        lat: "18.9924",
        long: "72.8547",
    },

    {
        area: "Sion",
        lat: "19.0390",
        long: "72.8619",
    },
    {
        area: "Thane",
        lat: "19.218330",
        long: "72.8777",
    },
    {
        area: "turbhe",
        lat: "19.0330",
        long: "73.0297",
    },

    //   layer
    {
        area: "Vashi",
        lat: "19.0745",
        long: "72.9978",
    },

    {
        area: "Vikhroli",
        lat: "19.1142",
        long: "72.9358",
    },
    {
        area: "Vile Parle",
        lat: "19.0968",
        long: "72.8517",
    },
    {
        area: "Wadala",
        lat: "19.0149",
        long: "72.86317",
    },
    {
        area: "Worli",
        lat: "18.9986",
        long: "72.8174",
    },
    {
        area: "Dharavi",
        lat: "19.0380",
        long: "72.8538",
    },
    {
        area: "Nahur",
        lat: "19.1553",
        long: "72.9438",
    },
];



$.ajax({
    method: 'POST',
    url: 'area',
    processData: false,
    success: function (data, textStatus, jqXHR) {
       
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "",
        }).addTo(map);
        map.flyTo([19.076, 72.8777], 12);
        let MumbaiMarket = L.marker([19.076, 72.8777]).addTo(map).bindPopup("Mumbai");
        MumbaiMarket._icon.classList.add("huechange");
        data.forEach((EachLocation) => {
            L.marker([EachLocation.latitude, EachLocation.longitude])
                    .addTo(map)
                    .on("click", (e) => ReturnAreaName(EachLocation.areaName,EachLocation.audienceCount))
                    .bindPopup(EachLocation.areaName);
        });

    },
    error: function (jqXHR, textStatus, errorThrown) {
       
    }
});



