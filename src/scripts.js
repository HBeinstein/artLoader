const base = 'https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.objects.getRandom';
const url = 'https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.objects.getRandom&access_token=6bc5780edd633a0d4b8caee90f6c1091&has_image=1&extras=images, colors';

function doAFetch() {
  fetch(url)
    .then(function(res){
      return res.json()
    }).then(function(json){
      return(json.object.images[0].b.url)
    })
}


$( document ).ready(function() {
  let artResult = doAFetch();

  console.log(artResult)
    $("#show-art").click(function() {
      $('#show-art').html(`<img>${artResult}</img>`);
      $('#show-art').show();
    });
});