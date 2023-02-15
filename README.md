# Nasa Project 

## Architecture Diagram
![Captura de tela de 2023-02-14 22-15-18](https://user-images.githubusercontent.com/73248516/218901001-695e2e4a-9e59-425f-b5c6-36c7d3540e00.png)

- The names "nasa-fe", "nasa-project-api" and "nasa-project" are the same as those defined in package-json
- Web browser talks directly with the web application to get the HTML along with our React code, which makes requests to the Node API
- The arrow is bidirectional because it's not only making requests one way going from front end to the API, but it's also getting responses back
- This project depends on the kepler_data file that originally comes from the cloud (the NASA Exoplanet Archive)
