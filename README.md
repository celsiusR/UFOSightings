## Overview of the Project

Explain the purpose of this analysis.

There is a compilation of data containing UFO data including the Date seen, City, Country, Shape and Duration. Some of the observations on the type of UFO are also collated under the Comments section. This project provides users a web interface to look up the UFO data based on different selection criteria of the UFO sightings. It incorporates Javascript to pull in all the data available in JSON format and render it in an HTM format based on the selection criteria.

Code and data is organized as:

![Code-organization](static/css/images/Code-organization.PNG)

## Results


Once hosted, the UFO website will be available at ***https://<TBD/UFOs/index.html***. On initial access, the user will be provided with a title and short description with a perspective on UFO sightings

![readme-header](static/css/images/readme-header.PNG)



In the second half of the page the listings of all the UFOs are displayed. On the left side filters are provided to the users to narrow down the search based on the filers criteria. The display is dynamic and results corresponding to the criteria specified are displayed immediately.
Here is an example in using the date filter:
a. Select the Exter Date input and type out "1/10/2010" and <Enter>. This display to the right will bring up those UFO listings on january 1 2010.
b. Alternatively, one can use the "Enter City" input box and enter a city. This will bring up the data for the UFO sightings in that city.
Note: Since the selection values are not precompiled, the user is advised to review the data the first time the page loads up to get an idea of the format and type of data avaialble to search or filter on.

## ![readme-lower-section](static/css/images/readme-lower-section.PNG)



## Summary

In a summary statement, describe one drawback of this new design and two recommendations for further development.

### Drawback

The user has to first observe the results and then formulate the search strings. The search values are not intuitive. For example, shapes like "Triangle" or "light" are not easily known

The user must be guided through the use of pull down selection menus and date pickers (calendar type widgets).

### Recommendations

1. The filter for "Enter Country" should have a "Country Based pull down menu". The user should be able to select the country(s) for the search parameter to the filter.
2. The filter for the Shaped should have a pull down "Shapes Available" menu. This should be assembled in the code itself so all the shapes of the UFO sightings should be available in this dynamic pull-down menu
3. The filer for the dates should have a calendar widget or a collection of dates currently available in the UFO data set. It should be pre-compiled.

