# frontend

This project is Erudia's frontend repository

### Configure

Before anything run the script `./copy-env.sh` and modify yourself the `.env` files
located in the `env/` folder in order to modify services' configurations

### Build/Run on your dev environment

Use `yarn install` to install your dependencies    
Use `yarn start` to start your dev environment    

### Test with the back

Elsewere on you dev machine clone the backend repository    
Follow the backend README.md to run the services in a dev env    
The backend compose forwards the ports so your dev env can use
it with localhost access in the env/frontend.env.    

### Build/Run with Docker

You just have to do `docker-compose up -d` to run all services (frontend included) and
`docker-compose up --build -d` in consecutive build (if you modify frontend's sources)

### Create Release to deploy

v0.0.0 for version and replace avec -m with the title
`git tag -a v0.0.0 -m "Init v0.0.0"`
to run the CI to deploy :
`git push origin --tags`
