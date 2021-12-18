import './sass/main.scss';
import reee from './temlates/reee.hbs';
import NewPixabayApi from './js/pixabay-api.js';



const gallery = document.querySelector('.gallery');
const but = document.querySelector('.button');
const input = document.querySelector('.www');
const searchForm = document.querySelector('.search-form')
const loadMore = document.querySelector('.load-more')


const newPixabayApi = new NewPixabayApi();

searchForm.addEventListener('submit', onSearch);
loadMore.addEventListener('click', onLoadMore)


function onSearch(evt) {
    evt.preventDefault()
    newPixabayApi.query = evt.currentTarget.elements.query.value;
    newPixabayApi.fetchPixabay().then(render);
}
function onLoadMore() {
    newPixabayApi.fetchPixabay().then(render)
}
function render(res) {
    gallery.insertAdjacentHTML('beforeend', reee(res))
   
}
