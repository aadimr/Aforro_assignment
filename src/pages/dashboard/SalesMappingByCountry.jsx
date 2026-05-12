import { useEffect, useRef, useState } from "react";
import * as topojson from "topojson-client";
import * as d3 from "d3-geo";

const highlightedCountries = {
  "840": "#FFB800",
  "076": "#FF5B6E",
  "356": "#7B61FF",
  "156": "#7B61FF",
  "360": "#00C48C",
  "682": "#00B8A9",
  "180": "#4C6FFF",
};

function SalesMappingByCountry() {
    
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch(
        "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
      );
      const world = await res.json();
      const countries = topojson.feature(world, world.objects.countries);

      const projection = d3
        .geoNaturalEarth1()
        .scale(130)
        .translate([370, 130]);

      const pathGen = d3.geoPath().projection(projection);

      const rendered = countries.features.map((f) => {
        const id = String(f.id).padStart(3, "0");
        return {
          id,
          d: pathGen(f),
          color: highlightedCountries[id] || "#ECECEC",
        };
      });

      setPaths(rendered);
    }
    load();
  }, []);

  return (
    <div className="w-full h-full rounded-[22px] bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-[20px] font-bold text-[#151D48]">
        Sales Mapping by Country
      </h2>
      <div className="h-[220px] w-full overflow-hidden rounded-[16px]">
        <svg viewBox="0 0 740 220" style={{ width: "100%", height: "100%" }}>
          {paths.map(({ id, d, color }) => (
            <path key={id} d={d} fill={color} stroke="white" strokeWidth="0.5" />
          ))}
        </svg>
      </div>
    </div>
  );
}

export default SalesMappingByCountry;