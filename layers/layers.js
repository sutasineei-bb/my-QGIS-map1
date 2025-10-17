var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LEbamLE_1 = new ol.format.GeoJSON();
var features_LEbamLE_1 = format_LEbamLE_1.readFeatures(json_LEbamLE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LEbamLE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LEbamLE_1.addFeatures(features_LEbamLE_1);
var lyr_LEbamLE_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LEbamLE_1, 
                style: style_LEbamLE_1,
                popuplayertitle: 'LE bam LE',
                interactive: true,
                title: '<img src="styles/legend/LEbamLE_1.png" /> LE bam LE'
            });
var format_LbamL_2 = new ol.format.GeoJSON();
var features_LbamL_2 = format_LbamL_2.readFeatures(json_LbamL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LbamL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LbamL_2.addFeatures(features_LbamL_2);
var lyr_LbamL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LbamL_2, 
                style: style_LbamL_2,
                popuplayertitle: 'L bam L',
                interactive: true,
                title: '<img src="styles/legend/LbamL_2.png" /> L bam L'
            });
var format_2Le_3 = new ol.format.GeoJSON();
var features_2Le_3 = format_2Le_3.readFeatures(json_2Le_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2Le_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2Le_3.addFeatures(features_2Le_3);
var lyr_2Le_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2Le_3, 
                style: style_2Le_3,
                popuplayertitle: 'เสาไฟฟ้า ทันย่า (2) Le',
                interactive: true,
                title: '<img src="styles/legend/2Le_3.png" /> เสาไฟฟ้า ทันย่า (2) Le'
            });
var format_L_4 = new ol.format.GeoJSON();
var features_L_4 = format_L_4.readFeatures(json_L_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L_4.addFeatures(features_L_4);
var lyr_L_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L_4, 
                style: style_L_4,
                popuplayertitle: 'เสาไฟฟ้า ทันย่า L',
                interactive: true,
                title: '<img src="styles/legend/L_4.png" /> เสาไฟฟ้า ทันย่า L'
            });
var format_L_5 = new ol.format.GeoJSON();
var features_L_5 = format_L_5.readFeatures(json_L_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L_5.addFeatures(features_L_5);
var lyr_L_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L_5, 
                style: style_L_5,
                popuplayertitle: 'เสาไฟฟ้า เม้ดทราย L',
                interactive: true,
                title: '<img src="styles/legend/L_5.png" /> เสาไฟฟ้า เม้ดทราย L'
            });
var format_LE_6 = new ol.format.GeoJSON();
var features_LE_6 = format_LE_6.readFeatures(json_LE_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LE_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LE_6.addFeatures(features_LE_6);
var lyr_LE_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LE_6, 
                style: style_LE_6,
                popuplayertitle: 'เสาไฟฟ้า เม็ดทราย LE',
                interactive: true,
                title: '<img src="styles/legend/LE_6.png" /> เสาไฟฟ้า เม็ดทราย LE'
            });
var format_2LE_7 = new ol.format.GeoJSON();
var features_2LE_7 = format_2LE_7.readFeatures(json_2LE_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2LE_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2LE_7.addFeatures(features_2LE_7);
var lyr_2LE_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2LE_7, 
                style: style_2LE_7,
                popuplayertitle: 'เสาไฟฟ้า ไออุ่น (2) LE',
                interactive: true,
                title: '<img src="styles/legend/2LE_7.png" /> เสาไฟฟ้า ไออุ่น (2) LE'
            });
var format_L_8 = new ol.format.GeoJSON();
var features_L_8 = format_L_8.readFeatures(json_L_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_L_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_L_8.addFeatures(features_L_8);
var lyr_L_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_L_8, 
                style: style_L_8,
                popuplayertitle: 'เสาไฟฟ้า ไออุ่น L',
                interactive: true,
                title: '<img src="styles/legend/L_8.png" /> เสาไฟฟ้า ไออุ่น L'
            });
var format_RbamR_9 = new ol.format.GeoJSON();
var features_RbamR_9 = format_RbamR_9.readFeatures(json_RbamR_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RbamR_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RbamR_9.addFeatures(features_RbamR_9);
var lyr_RbamR_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RbamR_9, 
                style: style_RbamR_9,
                popuplayertitle: 'R bam R',
                interactive: true,
                title: '<img src="styles/legend/RbamR_9.png" /> R bam R'
            });
var format_R_10 = new ol.format.GeoJSON();
var features_R_10 = format_R_10.readFeatures(json_R_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R_10.addFeatures(features_R_10);
var lyr_R_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R_10, 
                style: style_R_10,
                popuplayertitle: 'หลุม ลูกระนาด ทันย่า R',
                interactive: true,
                title: '<img src="styles/legend/R_10.png" /> หลุม ลูกระนาด ทันย่า R'
            });
var format_2R002kmz_11 = new ol.format.GeoJSON();
var features_2R002kmz_11 = format_2R002kmz_11.readFeatures(json_2R002kmz_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2R002kmz_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2R002kmz_11.addFeatures(features_2R002kmz_11);
var lyr_2R002kmz_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2R002kmz_11, 
                style: style_2R002kmz_11,
                popuplayertitle: 'หลุม ลูกระนาด เม็ดทราย (2) R002.kmz',
                interactive: true,
                title: '<img src="styles/legend/2R002kmz_11.png" /> หลุม ลูกระนาด เม็ดทราย (2) R002.kmz'
            });
var format_R001kmz_12 = new ol.format.GeoJSON();
var features_R001kmz_12 = format_R001kmz_12.readFeatures(json_R001kmz_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R001kmz_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R001kmz_12.addFeatures(features_R001kmz_12);
var lyr_R001kmz_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R001kmz_12, 
                style: style_R001kmz_12,
                popuplayertitle: 'หลุม ลูกระนาด เม็ดทราย R001.kmz',
                interactive: true,
                title: '<img src="styles/legend/R001kmz_12.png" /> หลุม ลูกระนาด เม็ดทราย R001.kmz'
            });
var format_T_13 = new ol.format.GeoJSON();
var features_T_13 = format_T_13.readFeatures(json_T_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T_13.addFeatures(features_T_13);
var lyr_T_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T_13, 
                style: style_T_13,
                popuplayertitle: 'ถังขยะ  เม็ดทราย T',
                interactive: true,
                title: '<img src="styles/legend/T_13.png" /> ถังขยะ  เม็ดทราย T'
            });
var format_T_14 = new ol.format.GeoJSON();
var features_T_14 = format_T_14.readFeatures(json_T_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_T_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_T_14.addFeatures(features_T_14);
var lyr_T_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_T_14, 
                style: style_T_14,
                popuplayertitle: 'ถังขยะ ทันย่า T',
                interactive: true,
                title: '<img src="styles/legend/T_14.png" /> ถังขยะ ทันย่า T'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_LEbamLE_1.setVisible(true);lyr_LbamL_2.setVisible(true);lyr_2Le_3.setVisible(true);lyr_L_4.setVisible(true);lyr_L_5.setVisible(true);lyr_LE_6.setVisible(true);lyr_2LE_7.setVisible(true);lyr_L_8.setVisible(true);lyr_RbamR_9.setVisible(true);lyr_R_10.setVisible(true);lyr_2R002kmz_11.setVisible(true);lyr_R001kmz_12.setVisible(true);lyr_T_13.setVisible(true);lyr_T_14.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_LEbamLE_1,lyr_LbamL_2,lyr_2Le_3,lyr_L_4,lyr_L_5,lyr_LE_6,lyr_2LE_7,lyr_L_8,lyr_RbamR_9,lyr_R_10,lyr_2R002kmz_11,lyr_R001kmz_12,lyr_T_13,lyr_T_14];
lyr_LEbamLE_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LbamL_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2Le_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_L_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_L_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LE_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2LE_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_L_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_RbamR_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_R_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_2R002kmz_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_R001kmz_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_T_13.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_T_14.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_LEbamLE_1.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_LbamL_2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_2Le_3.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_L_4.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_L_5.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_LE_6.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_2LE_7.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_L_8.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_RbamR_9.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_R_10.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_2R002kmz_11.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_R001kmz_12.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_T_13.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_T_14.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_LEbamLE_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_LbamL_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_2Le_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_L_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_L_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_LE_6.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_2LE_7.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_L_8.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_RbamR_9.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_R_10.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_2R002kmz_11.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_R001kmz_12.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_T_13.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_T_14.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_T_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});