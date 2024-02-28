const url = 'https://openapi.programming-hero.com/api/phones?search=iphone';
fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data.data));
