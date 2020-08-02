import $ from 'jquery';
import './styles.css';
import {doAFetch} from './services/art-call.js';

$( document ).ready(function() {
  let artResult = doAFetch();
  console.log(artResult.url);
  
    $("#art-button").on("click", function() {
      console.log("sup")
      $('#show-art').append(`<img>${artResult}</img>`);
      $('#show-art').show();
    });
});