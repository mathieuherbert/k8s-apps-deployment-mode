helm upgrade -f traefik-value.yaml traefik stable/traefik --namespace app

edit /etc/hosts
```127.0.0.1       localhost traefik.k8s app.breizhcamp```