"# Web-Map" 

REQUIREMENTS:

Map: When a user visit the site, they should be taken to a page where they can see a map of the City of Calgary.
Search: Users should be able to search for the building permits that their issued dates are within certain date range. Users should be able to use a date range picker widget to select the date range for the search. Please feel free to choose an existing date range picker widget you like. After performing the search, your webite should display the matching results as markers on a Leaflet map.
Identify: Users should be able to click on a marker on the map, a pop-up box should appear, and showing the following details about the building permit: issueddate, workclassgroup, contractorname, communityname and originaladdress.
Sometimes there will be overlapping markers, i.e., multiple building permits located at the same location. You need to develop an intuitive way allowing users to find the information about the building permit. Here is Leaflet Plug-in example you can use: https://github.com/jawj/OverlappingMarkerSpiderfier-Leaflet. If you have other ideas, feel free to try other ways.
Sometimes at certain zoom levels the Markers can get very close to each other, and the map are not visually appealing. You need to use a clustering plug-in to solve the issue. Here is an example plug-in you can try: https://github.com/Leaflet/Leaflet.markercluster. If you have other ideas, feel free to try other ways.
When a user search for a new date range, the map should be refreshed and display the new matching result.