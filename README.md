# ARC GIS Map

## Required Dependencies

-   Node package manager

## How to run

1. Register as a developer with ArcGIS to get API credentials:

-   go to https://developers.arcgis.com/dashboard/
-   register and make an API key
-   set the API key in `/scripts/requirements.js`

```js
esriConfig.apiKey = "get-your-own-key-ya-mooch";
```

1. Install serve:

```sh
npm install --global serve
```

2. Open a terminal and serve the application:

```sh
serve
```
