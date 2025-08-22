# Node + React + Nginx + Docker Compose (Ubuntu 20.04, Compose V2)

## Quick start
```bash
docker compose down -v --remove-orphans
docker compose build --no-cache
docker compose up -d
```

- Frontend: http://<server-ip>/
- API: http://<server-ip>/api

## Requirements on server
```bash
sudo apt update
sudo apt install -y docker.io git curl

# Install Docker Compose V2 plugin
DOCKER_CONFIG=${DOCKER_CONFIG:-$HOME/.docker}
mkdir -p $DOCKER_CONFIG/cli-plugins
curl -SL https://github.com/docker/compose/releases/download/v2.30.3/docker-compose-linux-x86_64 -o $DOCKER_CONFIG/cli-plugins/docker-compose
chmod +x $DOCKER_CONFIG/cli-plugins/docker-compose

sudo usermod -aG docker $USER
newgrp docker
```

## GitLab CI/CD
1. Set variables in GitLab → Settings → CI/CD → Variables
   - `DEPLOY_USER` e.g. `ubuntu`
   - `DEPLOY_HOST` e.g. `192.168.1.50`
   - `SSH_PRIVATE_KEY` (private key with access to VM)
2. Push to main → pipeline builds then SSH-deploys:
   - `docker compose up --build -d` on your VM

## Troubleshooting
- 404 on `/`: Ensure `nginx/default.conf` is mounted and frontend is healthy.
- `/api` fails: Check backend logs `docker compose logs backend` and Nginx config.
- Use `docker exec -it nginx sh` and `curl http://backend:5000/api` to test internal connectivity.
