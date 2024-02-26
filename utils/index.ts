export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'f0f6e2194dmsh16bc7d143d2b32ep1bb328jsnbfd6f455d839',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
        headers: headers
    });

    const result = await response.json();

    return result;
}