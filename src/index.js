
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';
import '/node_modules/slim-select/dist/slimselect.css';
import './css/styles.css';

const refs = {
  selectBreed: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
  loaderEl: document.querySelector('.loader'),
}; 


function BreedSelect(breeds) {
    breeds.forEach(({ value, label }) => {
        refs.selectBreed.insertAdjacentHTML(
            'beforeend',
            `<option value="${value}">${label}</option>`
        );
    });
    new SlimSelect({
      select: refs.selectBreed,
    });

};



function CreateCatInfo(cat) {
  
  const { name, origin, description, temperament, } =
    cat.breeds[0];
refs.catInfo.innerHTML = ` 
<img src="${cat.url}" alt="Cat Image" width="1080" class="cat-image">
    <div class="cat-container-info">
      <h2 class="cat-name">Name: ${name}</h2>
      <h3 class="country">From: ${origin}</h3>
      <p class="cat-description">Description: ${description}</p>
      <p class="cat-temperament">Temperament: ${temperament}</p>
    </div>
    `;
  refs.catInfo.classList.remove('hidden');
  refs.loaderEl.classList.add('hidden');
};
function DisplayError(error) {
  refs.loaderEl.classList.add('hidden');
  Notiflix.Notify.failure(
    'Oops! Something went wrong! Please, try reloading the page!'
  );
};

function DuringBreedChange() {

  const selectedBreed = refs.selectBreed.value;

  if (!selectedBreed) {
    refs.catInfo.innerHTML = '';
    refs.catInfo.classList.add('hidden');
    return;
  }

  refs.loaderEl.classList.remove('hidden');
  refs.catInfo.classList.add('hidden')

  fetchCatByBreed(selectedBreed)
    .then(CreateCatInfo)
  .catch(DisplayError)

};

fetchBreeds()
  .then(data => {
    BreedSelect(data);
    refs.loaderEl.classList.add('hidden');
  })
  .catch(DisplayError);

  refs.selectBreed.addEventListener('change', DuringBreedChange)







