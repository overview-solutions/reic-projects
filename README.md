# Renewable Energy Innovators Cameroon (REIc) Map
[![image][1]][2]

[1]: https://user-images.githubusercontent.com/8453197/134829689-39bf435e-bf34-4847-a34c-7ba0eeb3ca51.png
[2]: https://overview-solutions.github.io/reic-projects/

## Introduction
Renewable Energy Innovators Cameroon (REIc) is a business in Cameroon focusing on the electrification of villages in rural parts of the nation through the use of renewable energy.


# Map Data
### Custom Data
The REIc project sites are updated in Excel, and saved as a CSV file. We use `csv2geojson` to convert that file to the `projects.geojson` file, which the map recognized as a geolocated dataset.

### Public Transmission Network Data
**OSM Global Power Lines:** Taking inspiration from the [Open Infrastructure Map](https://openinframap.org/#4/31.99/-40.91/Power-Telecoms), a baselayer was created using the [power=lines](https://wiki.openstreetmap.org/wiki/Power) data from OpenStreetMaps via [Overpass Turbo](http://overpass-turbo.eu/). This data by itself doesn't show at full zoom level, so it needs to be run through [Tippecanoe](https://www.mapbox.com/help/adjust-tileset-zoom-extent/), and then loaded into Mapbox.

**Transmission Netowrk for Cameroon:** The World Bank published a dataset showing Cameroon's High VOltage Electrical Transmission Network here: https://datacatalog.worldbank.org/dataset/cameroon-electricity-transmission-network
