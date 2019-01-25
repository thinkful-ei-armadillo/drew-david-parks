'use strict';
/* global $ */

const apiKey = '50tWslfPEMTASf8Nddf6CgMuUIOAhvpt0WswKZIp';


function sendParkRequest(searchTerm, maxResults){
  const options = {
    headers: new Headers({
      'X-Api-Key': apiKey})
  };
  const url = 'https://developer.nps.gov/api/v1/parks';
  fetch(url, options);
}

function userSearchHandler() {
  $('.js-search').on('submit', event => {
    event.preventDefault();

    const searchTerm = $('#state').val();
    const maxResults = $('#max-results').val();
    console.log(`searchTerm: ${searchTerm} and maxResults: ${maxResults}`);
    sendParkRequest(searchTerm, maxResults);
  });
}

function main(){

}

$(main);