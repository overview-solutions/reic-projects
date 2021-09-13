# Renewable Energy Innovators Cameroon (REIc) Map

## Introduction
Renewable Energy Innovators Cameroon (REIc) is a business in Cameroon focusing on the electrification of villages in rural parts of the nation through the use of renewable energy.


# Map Data
Taking inspiration from the [Open Infrastructure Map](https://openinframap.org/#4/31.99/-40.91/Power-Telecoms), the goal of this map is to 
feature up-to-date information on the existing infrastructure, as well as additional geolocated datasets on specific micro-grid sites.
This is primarily using the [power=lines](https://wiki.openstreetmap.org/wiki/Power) data from OSM at the moment. This data by itself doesn't show at full zoom level, so it needs to be run through [Tippecanoe](https://www.mapbox.com/help/adjust-tileset-zoom-extent/), and then loaded into Mapbox.

The project sites are updated in Excel, and saved as a CSV file. We use `csv2geojson` to convert that file to the `projects.geojson` file, which the map recognized as a geolocated dataset.

# Mapping Tools
The power line data is pulled from OSM using [this site](http://overpass-turbo.eu/), and then uploaded into [Mapbox](https://www.mapbox.com/) Studio as a set of tilesets.
These tilesets are combined into the following Mapbox Style: mapbox://styles/earthadam/cjf0rz4yj6dj32sliavy2l0dg

## Adding Power Line Data to OSM
In order to edit OSM data and add map features, use a client such as JOSM or iD. Once the data is sent back to the OSM database, revert to the Overpass API to re-download that section into Mapbox. Long-term, it was suggested to make a cron job to do this using the [overpass query](https://github.com/perliedman/query-overpass) on a daily basis or something like that.

# Goals
1. Improve the map to highlight Cameroon's border, and make the country better lit than the rest of the map.
1. Add Country names to the map
1. Add population density data to the map
1. Improve the power-lines layer for Cameroon. Try to find more datasets on this through local sources.
1. Add villages that are sites of future micro-grid projects.
