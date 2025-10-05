document.querySelector('button').addEventListener('click', getData)


async function getData() {
    const firstName = document.querySelector('#first').value
    const lastName = document.querySelector('#second').value
    const url = `https://musicbrainz.org/ws/2/artist/?query=${firstName}\%2F${lastName}&fmt=json`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        const artist = result.artists[0].name
        const artistCity = result.artists[0]['begin-area'].name


        const otherUrl = `https://api.api-ninjas.com/v1/city?name=${artistCity}`;
        fetch(otherUrl, {
            headers: {
            'X-Api-Key': 'KAM/3+x4kAELoEURvdgxNQ==VOIcDSa0EvvnPJbt'
            }
        })
            .then(res => res.json()) // parse response as JSON
            .then(data => {
                const cityPopulation = data[0].population
                
                document.querySelector('h2').innerHTML += `<div>Artist Name: ${artist}</div>`
                document.querySelector('h2').innerHTML += `<div>Artist City: ${artistCity}</div>`
                document.querySelector('h2').innerHTML += `<div>City Population: ${cityPopulation} people</div>`
                
            })
            .catch(err => {
                console.log(`error ${err}`)
            });
    } catch (error) {
        console.error(error.message);
    }
}