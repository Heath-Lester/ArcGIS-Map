export const requirements = () => {
	return require(["esri/config", "esri/Map", "esri/views/MapView"], function (esriConfig, Map, MapView) {
		esriConfig.apiKey = "get-your-own-key-ya-mooch";

		const map = new Map({
			basemap: "arcgis/topographic",
		});

		const view = new MapView({
			map: map,
			center: [-118.805, 34.027],
			zoom: 13,
			container: "viewDiv",
		});
	});
};
