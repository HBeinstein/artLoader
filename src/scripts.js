import $ from 'jquery';
import './styles.css';
import {doAFetch} from './services/art-call.js';

$( document ).ready(function() {
  let artResult = doAFetch();
  
    $("#art-button").on("click", function() {
      $('#show-art').empty();
      console.log("sup")
      $('#show-art').append(`<img src="${artResult[0]}">`);
      $('#show-art').show();
    });
});