# Nasa Project 

## Architecture Diagram
![Captura de tela de 2023-04-13 22-58-28](https://user-images.githubusercontent.com/73248516/231922488-b7b7fff2-f0bc-4365-a905-b83a685beff0.png)

- The names "nasa-fe", "nasa-project-api" and "nasa-project" are the same as those defined in package-json
- Web browser talks directly with the web application to get the HTML along with our React code, which makes requests to the Node API
- The arrow is bidirectional because it's not only making requests one way going from front end to the API, but it's also getting responses back
- This project depends on the kepler_data file that originally comes from the cloud (the NASA Exoplanet Archive)
