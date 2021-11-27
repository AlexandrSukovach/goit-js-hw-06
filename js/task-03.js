const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const navEl = document.querySelector('.gallery');
const styleBody = document.querySelector('body');

const galleryAnimal = images.map(({ url, alt }) => `<li class="gallery-item"><img src="${url}" alt="${alt}" width = 340 height = 220></li>`)
  .join("");

navEl.insertAdjacentHTML("beforeend", galleryAnimal);
navEl.insertAdjacentHTML("beforebegin", "<h2>gallery animal</h2>");
styleBody.setAttribute("style", "text-align: center;");
navEl.setAttribute("style", "list-style-type:none; display: flex; justify-content: space-evenly;");
