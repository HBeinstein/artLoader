import $ from 'jquery';
import './styles.css';
import {doAFetch} from './services/art-call.js';

$( document ).ready(function() {
  $("#art-button").on("click", function() {
    let artResult = doAFetch();

    let a = Promise.resolve(artResult)

    a.then(function(art){
      $('#show-art').empty();
      $('#show-art').append(`<img src="${art.object.images[0].b.url}">`);
      $('#show-art').show();
    });
  })
});