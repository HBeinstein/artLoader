export function doAFetch() {
  return fetch(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.objects.getRandom&access_token=${process.env.API_KEY}&has_image=1`)
  .then(function(response) {
    if(!response.ok){
      throw Error(response.statusText)
    } console.log("ok"); 
    return response.json()
  })
  .catch(function(error) {
    console.error(error);
  })
  .then(function(data){
    console.log("returning data")
    return data;
  });
} 