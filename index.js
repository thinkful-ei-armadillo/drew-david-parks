'use strict';
/* global $ */

const apiKey = '50tWslfPEMTASf8Nddf6CgMuUIOAhvpt0WswKZIp';
const baseUrl = 'https://developer.nps.gov/api/v1/parks';

function sendParkRequest(stateCode, limit){
  const options = {
    headers: new Headers({
      'X-Api-Key': apiKey})
  };

  const params = {
    stateCode,
    limit
  };
  
  const queryString = formatQueryParams(params);
  const url = `${baseUrl}?${queryString}&api_key=50tWslfPEMTASf8Nddf6CgMuUIOAhvpt0WswKZIp`;
  console.log(url);

  fetch(url)
    .then(data => data.json())
    .then(response => displayResults(response));
}

function displayResults(responseObj){
  const HTMLString = responseObj.data.map(obj => `<li>Name: ${obj.name} <br> Full Description: ${obj.description} <br> URL: ${obj.url}</li>`);
  $('.js-results-list').html(HTMLString);
}

function formatQueryParams(paramsObject){
  // return an interpolated string `?stateCode=${searchTerm}&limit=${maxResults}`
  const paramsKeys = Object.keys(paramsObject)
    .map(key => `${key}=${paramsObject[key]}`).join('&');
  return paramsKeys;
}

function userSearchHandler() {
  $('.js-search').on('submit', event => {
    event.preventDefault();

    const stateCode = $('#state').val();
    const limit = $('#max-results').val() - 1;
    
    sendParkRequest(stateCode, limit);
  });
}

function main(){
  userSearchHandler();
}

$(main);