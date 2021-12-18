export default class NewPixabayApi {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
fetchPixabay() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=24433590-940801a6c955dec539ebcd725`;
    return fetch(url)
            .then(response => {return response.json();})
            .then(eee => {
                this.page +=1;
                return eee.hits
            })
            .catch(error => console.log(error));
}
get query () {
    return this.searchQuery;
}
set query(newQuery) {
    this.searchQuery = newQuery;
}
}