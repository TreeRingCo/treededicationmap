var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 0.950000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Final_Tree_Locations3_1 = new ol.format.GeoJSON();
var features_Final_Tree_Locations3_1 = format_Final_Tree_Locations3_1.readFeatures(json_Final_Tree_Locations3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Final_Tree_Locations3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Final_Tree_Locations3_1.addFeatures(features_Final_Tree_Locations3_1);
var lyr_Final_Tree_Locations3_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Final_Tree_Locations3_1, 
                style: style_Final_Tree_Locations3_1,
                interactive: true,
                title: '<img src="styles/legend/Final_Tree_Locations3_1.png" /> Final_Tree_Locations3'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Final_Tree_Locations3_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Final_Tree_Locations3_1];
lyr_Final_Tree_Locations3_1.set('fieldAliases', {'Tree': 'Tree', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Species': 'Species', 'Age': 'Age', 'images': 'images', 'Full Size Image': 'Full Size Image', });
lyr_Final_Tree_Locations3_1.set('fieldImages', {'Tree': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Species': 'TextEdit', 'Age': 'TextEdit', 'images': 'TextEdit', 'Full Size Image': 'TextEdit', });
lyr_Final_Tree_Locations3_1.set('fieldLabels', {'Tree': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Species': 'inline label', 'Age': 'inline label', 'images': 'no label', 'Full Size Image': 'no label', });
lyr_Final_Tree_Locations3_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});