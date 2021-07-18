Webcam.set({
    height:300,
    width:300,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById ('camera');
Webcam.attach("#camera");
function take_snapshot()
{
Webcam.snap( function(data_uri) {
  // display results in page
  document.getElementById('result').innerHTML = 
  '<img id="save" src="'+data_uri+'"/>';
} );
}
