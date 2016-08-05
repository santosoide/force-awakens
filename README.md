# The Star Wars Force Awakens

All the Star Wars data you've ever wanted: Planets, Spaceships, Vehicles, People, Films and Species From all SEVEN Star Wars films

Framework and Libraries

- React.js with ES6
- React-Router for routing
- Redux
- Infinite Scroll
- Semantic-ui
- api starwars using [swapi.co](http://swapi.co)

# [Demo Apps](http://swapi-reactjs.surge.sh) 

# Installation

1. clone the repo `$ git clone https://github.com/cyberid41/force-awakens.git`
2. `npm install`
3. `npm run build`
4. `npm start`
5. Navigate to `http://localhost:3000`

# Deploy on surge.sh

- add line code

```
    ...
     "scripts": {
        "build": "set NODE_ENV=production && webpack --config ./webpack.production.config.js --progress --profile --colors",
        "predeploy": "npm run -s build",
        "deploy": "cp dist/index.html dist/200.html && surge -d swapi-reactjs.surge.sh dist"
    },
    ...

    "devDependencies": {
        "surge": "^0.18.0"
    }
    ...

```

- create CNAME file

`echo "swapi-reactjs.surge.sh" > CNAME`

- run cli

`npm run deploy`