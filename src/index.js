
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';
import '/node_modules/slim-select/dist/slimselect.css';



const refs = {
  selectBreed: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
  loaderEl: document.querySelector('.loader'),
}; 


function BreedSelect(breeds) {
    breeds.forEach(({ value, label }) => {
        selectBreed.insertAdjacentHTML(
            'beforeend',
            `<option value="${value}">${label}</option>`
        );
    });
    new SlimSelect({
      select: breedSelect,
    });


}



