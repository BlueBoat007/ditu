var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__0, 
                style: style__0,
                popuplayertitle: '花生面积（千公顷）',
                interactive: true,
                title: '<img src="styles/legend/_0.png" /> 花生面积（千公顷）'
            });

lyr__0.setVisible(true);
var layersList = [lyr__0];
lyr__0.set('fieldAliases', {'name': 'name', '2020年': '2020年', '2021年': '2021年', '2022年': '2022年', '2023年': '2023年', '2024年': '2024年', });
lyr__0.set('fieldImages', {'name': 'TextEdit', '2020年': 'TextEdit', '2021年': 'TextEdit', '2022年': 'TextEdit', '2023年': 'TextEdit', '2024年': 'TextEdit', });
lyr__0.set('fieldLabels', {'name': 'no label', '2020年': 'no label', '2021年': 'no label', '2022年': 'no label', '2023年': 'no label', '2024年': 'no label', });
lyr__0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});