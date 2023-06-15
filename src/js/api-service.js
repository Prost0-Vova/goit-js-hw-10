
export function fetchBreeds() {
    const BASIC_URL = 'https://api.thecatapi.com/v1/breeds';
    return fetch(BASIC_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch cat breeds.');
            }
            return response.json();
        })
        .then(data => {
            return data.map(({ id, name }) => ({
                value: id,
                label: name,

            }));
        })
        .catch(error => {
            console.error('Error fetching cat breeds', error)
        });
}

export function fetchCatByBreed(breedId) {
    const apiKey = 'api_key=live_7rsV5XRN18iZErnnoDiet5c7NeRUXgwH5lgrA8xJDhxrMWsWgezohKRHoAmuuyDV';
    return fetch(apiKey)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch cat by breed.');
        }
        return response.json();
      })
      .then(([cat]) => {
        return cat;
      })
      .catch(error => {
        console.error('Error fetching cat data:', error);
        throw error;
      });


}






