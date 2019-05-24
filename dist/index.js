!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("BrowserImageResizer",[],t):"object"==typeof exports?exports.BrowserImageResizer=t():e.BrowserImageResizer=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){var r;function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}(function(){var n=!1,i=function e(t){return t instanceof e?t:this instanceof e?void(this.EXIFwrapped=t):new e(t)};e.exports&&(t=e.exports=i),t.EXIF=i;var a=i.Tags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},s=i.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},l=i.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},u=i.IFD1Tags={256:"ImageWidth",257:"ImageHeight",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",273:"StripOffsets",274:"Orientation",277:"SamplesPerPixel",278:"RowsPerStrip",279:"StripByteCounts",282:"XResolution",283:"YResolution",284:"PlanarConfiguration",296:"ResolutionUnit",513:"JpegIFOffset",514:"JpegIFByteCount",529:"YCbCrCoefficients",530:"YCbCrSubSampling",531:"YCbCrPositioning",532:"ReferenceBlackWhite"},c=i.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}};function d(e){return!!e.exifdata}function f(e,t){function r(r){var o=g(r),i=function(e){var t=new DataView(e);n&&console.log("Got file of length "+e.byteLength);if(255!=t.getUint8(0)||216!=t.getUint8(1))return n&&console.log("Not a valid JPEG"),!1;var r=2,o=e.byteLength,i=function(e,t){return 56===e.getUint8(t)&&66===e.getUint8(t+1)&&73===e.getUint8(t+2)&&77===e.getUint8(t+3)&&4===e.getUint8(t+4)&&4===e.getUint8(t+5)};for(;r<o;){if(i(t,r)){var a=t.getUint8(r+7);a%2!=0&&(a+=1),0===a&&(a=4);var s=r+8+a,l=t.getUint16(r+6+a);return m(e,s,l)}r++}}(r);e.exifdata=o||{},e.iptcdata=i||{},t&&t.call(e)}if(e.src)if(/^data\:/i.test(e.src))r(function(e,t){t=t||e.match(/^data\:([^\;]+)\;base64,/im)[1]||"",e=e.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var n=atob(e),r=n.length,o=new ArrayBuffer(r),i=new Uint8Array(o),a=0;a<r;a++)i[a]=n.charCodeAt(a);return o}(e.src));else if(/^blob\:/i.test(e.src)){(i=new FileReader).onload=function(e){r(e.target.result)},function(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="blob",n.onload=function(e){200!=this.status&&0!==this.status||t(this.response)},n.send()}(e.src,function(e){i.readAsArrayBuffer(e)})}else{var o=new XMLHttpRequest;o.onload=function(){if(200!=this.status&&0!==this.status)throw"Could not load image";r(o.response),o=null},o.open("GET",e.src,!0),o.responseType="arraybuffer",o.send(null)}else if(self.FileReader&&(e instanceof self.Blob||e instanceof self.File)){var i;(i=new FileReader).onload=function(e){n&&console.log("Got file of length "+e.target.result.byteLength),r(e.target.result)},i.readAsArrayBuffer(e)}}function g(e){var t=new DataView(e);if(n&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return n&&console.log("Not a valid JPEG"),!1;for(var r,o=2,i=e.byteLength;o<i;){if(255!=t.getUint8(o))return n&&console.log("Not a valid marker at offset "+o+", found: "+t.getUint8(o)),!1;if(r=t.getUint8(o+1),n&&console.log(r),225==r)return n&&console.log("Found 0xFFE1 marker"),w(t,o+4,t.getUint16(o+2));o+=2+t.getUint16(o+2)}}var h={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};function m(e,t,n){for(var r,o,i,a,s=new DataView(e),l={},u=t;u<t+n;)28===s.getUint8(u)&&2===s.getUint8(u+1)&&(a=s.getUint8(u+2))in h&&((i=s.getInt16(u+3))+5,o=h[a],r=y(s,u+5,i),l.hasOwnProperty(o)?l[o]instanceof Array?l[o].push(r):l[o]=[l[o],r]:l[o]=r),u++;return l}function p(e,t,r,o,i){var a,s,l,u=e.getUint16(r,!i),c={};for(l=0;l<u;l++)a=r+12*l+2,!(s=o[e.getUint16(a,!i)])&&n&&console.log("Unknown tag: "+e.getUint16(a,!i)),c[s]=S(e,a,t,r,i);return c}function S(e,t,n,r,o){var i,a,s,l,u,c,d=e.getUint16(t+2,!o),f=e.getUint32(t+4,!o),g=e.getUint32(t+8,!o)+n;switch(d){case 1:case 7:if(1==f)return e.getUint8(t+8,!o);for(i=f>4?g:t+8,a=[],l=0;l<f;l++)a[l]=e.getUint8(i+l);return a;case 2:return y(e,i=f>4?g:t+8,f-1);case 3:if(1==f)return e.getUint16(t+8,!o);for(i=f>2?g:t+8,a=[],l=0;l<f;l++)a[l]=e.getUint16(i+2*l,!o);return a;case 4:if(1==f)return e.getUint32(t+8,!o);for(a=[],l=0;l<f;l++)a[l]=e.getUint32(g+4*l,!o);return a;case 5:if(1==f)return u=e.getUint32(g,!o),c=e.getUint32(g+4,!o),(s=new Number(u/c)).numerator=u,s.denominator=c,s;for(a=[],l=0;l<f;l++)u=e.getUint32(g+8*l,!o),c=e.getUint32(g+4+8*l,!o),a[l]=new Number(u/c),a[l].numerator=u,a[l].denominator=c;return a;case 9:if(1==f)return e.getInt32(t+8,!o);for(a=[],l=0;l<f;l++)a[l]=e.getInt32(g+4*l,!o);return a;case 10:if(1==f)return e.getInt32(g,!o)/e.getInt32(g+4,!o);for(a=[],l=0;l<f;l++)a[l]=e.getInt32(g+8*l,!o)/e.getInt32(g+4+8*l,!o);return a}}function y(e,t,n){for(var r="",o=t;o<t+n;o++)r+=String.fromCharCode(e.getUint8(o));return r}function w(e,t){if("Exif"!=y(e,t,4))return n&&console.log("Not valid EXIF data! "+y(e,t,4)),!1;var r,o,i,d,f,g=t+6;if(18761==e.getUint16(g))r=!1;else{if(19789!=e.getUint16(g))return n&&console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),!1;r=!0}if(42!=e.getUint16(g+2,!r))return n&&console.log("Not valid TIFF data! (no 0x002A)"),!1;var h=e.getUint32(g+4,!r);if(h<8)return n&&console.log("Not valid TIFF data! (First offset less than 8)",e.getUint32(g+4,!r)),!1;if((o=p(e,g,g+h,s,r)).ExifIFDPointer)for(i in d=p(e,g,g+o.ExifIFDPointer,a,r)){switch(i){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":d[i]=c[i][d[i]];break;case"ExifVersion":case"FlashpixVersion":d[i]=String.fromCharCode(d[i][0],d[i][1],d[i][2],d[i][3]);break;case"ComponentsConfiguration":d[i]=c.Components[d[i][0]]+c.Components[d[i][1]]+c.Components[d[i][2]]+c.Components[d[i][3]]}o[i]=d[i]}if(o.GPSInfoIFDPointer)for(i in f=p(e,g,g+o.GPSInfoIFDPointer,l,r)){switch(i){case"GPSVersionID":f[i]=f[i][0]+"."+f[i][1]+"."+f[i][2]+"."+f[i][3]}o[i]=f[i]}return o.thumbnail=function(e,t,n,r){var o=function(e,t,n){var r=e.getUint16(t,!n);return e.getUint32(t+2+12*r,!n)}(e,t+n,r);if(!o)return{};if(o>e.byteLength)return{};var i=p(e,t,t+o,u,r);if(i.Compression)switch(i.Compression){case 6:if(i.JpegIFOffset&&i.JpegIFByteCount){var a=t+i.JpegIFOffset,s=i.JpegIFByteCount;i.blob=new Blob([new Uint8Array(e.buffer,a,s)],{type:"image/jpeg"})}break;case 1:console.log("Thumbnail image format is TIFF, which is not implemented.");break;default:console.log("Unknown thumbnail image format '%s'",i.Compression)}else 2==i.PhotometricInterpretation&&console.log("Thumbnail image format is RGB, which is not implemented.");return i}(e,g,h,r),o}i.getData=function(e,t){return!((self.Image&&e instanceof self.Image||self.HTMLImageElement&&e instanceof self.HTMLImageElement)&&!e.complete)&&(d(e)?t&&t.call(e):f(e,t),!0)},i.getTag=function(e,t){if(d(e))return e.exifdata[t]},i.getIptcTag=function(e,t){if(d(e))return e.iptcdata[t]},i.getAllTags=function(e){if(!d(e))return{};var t,n=e.exifdata,r={};for(t in n)n.hasOwnProperty(t)&&(r[t]=n[t]);return r},i.getAllIptcTags=function(e){if(!d(e))return{};var t,n=e.iptcdata,r={};for(t in n)n.hasOwnProperty(t)&&(r[t]=n[t]);return r},i.pretty=function(e){if(!d(e))return"";var t,n=e.exifdata,r="";for(t in n)n.hasOwnProperty(t)&&("object"==o(n[t])?n[t]instanceof Number?r+=t+" : "+n[t]+" ["+n[t].numerator+"/"+n[t].denominator+"]\r\n":r+=t+" : ["+n[t].length+" values]\r\n":r+=t+" : "+n[t]+"\r\n");return r},i.readFromBinaryFile=function(e){return g(e)},void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}).call(this)},function(e,t,n){"use strict";n.r(t),n.d(t,"readAndCompressImage",function(){return a});var r=n(0),o=n.n(r),i={quality:.5,maxWidth:800,maxHeight:600,autoRotate:!0,debug:!1,mimeType:"image/jpeg",backgroundColor:"#fff"};function a(e,t){return new Promise(function(n){var r=document.createElement("img"),a=new FileReader,l=Object.assign({},i,t);a.onload=function(e){r.src=e.target.result,r.onload=function(){l.autoRotate&&(l.debug&&console.log("browser-image-resizer: detecting image orientation..."),"function"==typeof o.a.getData&&"function"==typeof o.a.getTag?o.a.getData(r,function(){var e=o.a.getTag(this,"Orientation");l.debug&&console.log("browser-image-resizer: image orientation from EXIF tag = "+e),n(s(r,l,e))}):(console.error("browser-image-resizer: can't read EXIF data, the Exif.js library not found"),n(s(r,l))))}},a.readAsDataURL(e)})}function s(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=document.createElement("canvas");r.width=e.width,r.height=e.height;var o=r.getContext("2d");o.save(),function(e,t,n,r){var o=e.width,i=e.style.width,a=e.height,s=e.style.height;n>4&&(e.width=a,e.style.width=s,e.height=o,e.style.height=i);switch(n){case 2:t.translate(o,0),t.scale(-1,1);break;case 3:t.translate(o,a),t.rotate(Math.PI);break;case 4:t.translate(0,a),t.scale(1,-1);break;case 5:t.rotate(.5*Math.PI),t.scale(1,-1);break;case 6:t.rotate(.5*Math.PI),t.translate(0,-a);break;case 7:t.rotate(.5*Math.PI),t.translate(o,-a),t.scale(-1,1);break;case 8:t.rotate(-.5*Math.PI),t.translate(-o,0)}t.drawImage(r,0,0),t.restore()}(r,o,n,e);for(var i=function(e,t){var n=t.width/t.height,r=Math.min(t.width,e.maxWidth,n*e.maxHeight);e.maxSize>0&&e.maxSize<t.width*t.height/1e3&&(r=Math.min(r,Math.floor(1e3*e.maxSize/t.height)));e.scaleRatio&&(r=Math.min(r,Math.floor(e.scaleRatio*t.width)));e.debug&&(console.log("browser-image-resizer: original image size = "+t.width+" px (width) X "+t.height+" px (height)"),console.log("browser-image-resizer: scaled image size = "+r+" px (width) X "+Math.floor(r/n)+" px (height)"));r<=0&&(r=1,console.warning("browser-image-resizer: image size is too small"));return r}(t,r);r.width>=2*i;)r=l(r);r.width>i&&(r=function(e,t){var n=document.createElement("canvas"),r=t.outputWidth/e.width;n.width=e.width*r,n.height=e.height*r;var o=e.getContext("2d").getImageData(0,0,e.width,e.height),i=n.getContext("2d").createImageData(n.width,n.height);return function(e,t,n){function r(e,t,n,r,o,i){var a=1-o,s=1-i;return e*a*s+t*o*s+n*a*i+r*o*i}var o,i,a,s,l,u,c,d,f,g,h,m,p,S,y,w,b,P,F;for(o=0;o<t.height;++o)for(a=o/n,s=Math.floor(a),l=Math.ceil(a)>e.height-1?e.height-1:Math.ceil(a),i=0;i<t.width;++i)u=i/n,c=Math.floor(u),d=Math.ceil(u)>e.width-1?e.width-1:Math.ceil(u),f=4*(i+t.width*o),g=4*(c+e.width*s),h=4*(d+e.width*s),m=4*(c+e.width*l),p=4*(d+e.width*l),S=u-c,y=a-s,w=r(e.data[g],e.data[h],e.data[m],e.data[p],S,y),t.data[f]=w,b=r(e.data[g+1],e.data[h+1],e.data[m+1],e.data[p+1],S,y),t.data[f+1]=b,P=r(e.data[g+2],e.data[h+2],e.data[m+2],e.data[p+2],S,y),t.data[f+2]=P,F=r(e.data[g+3],e.data[h+3],e.data[m+3],e.data[p+3],S,y),t.data[f+3]=F}(o,i,r),n.getContext("2d").putImageData(i,0,0),n}(r,Object.assign(t,{outputWidth:i})));var a=r.toDataURL(t.mimeType,t.quality);return"function"==typeof t.onScale&&t.onScale(a),function(e){for(var t=atob(e.split(",")[1]),n=e.split(",")[0].split(":")[1].split(";")[0],r=new ArrayBuffer(t.length),o=new Uint8Array(r),i=0;i<t.length;i++)o[i]=t.charCodeAt(i);return new Blob([r],{type:n})}(a)}function l(e){var t=document.createElement("canvas");return t.width=e.width/2,t.height=e.height/2,t.getContext("2d").drawImage(e,0,0,t.width,t.height),t}}])});