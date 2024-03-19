export const requirements = () => {
	return require([
		"esri/config",
		"esri/Map",
		"esri/WebMap",
		"esri/views/MapView",
		"esri/widgets/ScaleBar",
		"esri/widgets/Legend",
	], function (esriConfig, Map, WebMap, MapView, ScaleBar, Legend) {
		esriConfig.apiKey = "get-your-own-key-ya-mooch";

		const map = new WebMap({
			portalItem: {
				id: "6dfb41e6b79b4dcd820c79717e465eac",
			},
		});

		// const map = new Map({
		// 	basemap: "arcgis/topographic",
		// });

		const view = new MapView({
			map: map,
			center: [-118.805, 34.027],
			zoom: 13,
			container: "viewDiv",
		});

		const scalebar = new ScaleBar({
			view: view,
		});

		const legend = new Legend({
			view: view,
		});

		view.ui.add(scalebar, "bottom-left");
		view.ui.add(legend, "top-right");
	});
};
