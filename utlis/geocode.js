async function geocodeOSM(place) {

  const url =
    "https://nominatim.openstreetmap.org/search?format=json&q=" +
    encodeURIComponent(place);

  const res = await fetch(url);
  const data = await res.json();

  if (data.length > 0) {
    return {
      lat: parseFloat(data[0].lat),
      lng: parseFloat(data[0].lon)
    };
  }

  return null;
}

module.exports = { geocodeOSM };