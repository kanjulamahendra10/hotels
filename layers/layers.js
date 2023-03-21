var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_HOTELSSHAPEFLIE_1 = new ol.format.GeoJSON();
var features_HOTELSSHAPEFLIE_1 = format_HOTELSSHAPEFLIE_1.readFeatures(json_HOTELSSHAPEFLIE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOTELSSHAPEFLIE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOTELSSHAPEFLIE_1.addFeatures(features_HOTELSSHAPEFLIE_1);
var lyr_HOTELSSHAPEFLIE_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HOTELSSHAPEFLIE_1, 
                style: style_HOTELSSHAPEFLIE_1,
                interactive: true,
    title: 'HOTELS SHAPEFLIE<br />\
    <img src="styles/legend/HOTELSSHAPEFLIE_1_0.png" /> 6 - 6<br />\
    <img src="styles/legend/HOTELSSHAPEFLIE_1_1.png" /> 6 - 7<br />\
    <img src="styles/legend/HOTELSSHAPEFLIE_1_2.png" /> 7 - 8<br />\
    <img src="styles/legend/HOTELSSHAPEFLIE_1_3.png" /> 8 - 8<br />\
    <img src="styles/legend/HOTELSSHAPEFLIE_1_4.png" /> 8 - 10<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_HOTELSSHAPEFLIE_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_HOTELSSHAPEFLIE_1];
lyr_HOTELSSHAPEFLIE_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'ratings': 'ratings', });
lyr_HOTELSSHAPEFLIE_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'ratings': 'Range', });
lyr_HOTELSSHAPEFLIE_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'ratings': 'no label', });
lyr_HOTELSSHAPEFLIE_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});