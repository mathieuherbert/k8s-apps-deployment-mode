# Update modes on K8S

Requirements:
- kubectl must be setup and target to a K8S cluster
- helm must be installed and initialized (`helm init` in most cases)
- docker should be installed and accessible

## Install requirements
```bash
make requirements
```

it will install the app namespace (if wanted) and install traefik on this server

## deploy Rolling Update
Infrastructure deployment
```bash
make create_rolling_update
```

Update to Green
```bash
make update_rolling_update_to_green
```


Update to Blue
```bash
make update_rolling_update_to_blue
```
Delete rolling update

```bash
make delete_rolling_update
```


## deploy Blue Green
Infrastructure deployment
```bash
make create_blue_green
```

Update to Green
```bash
make update_blue_green_to_green
```


Update to Blue
```bash
make update_blue_green_to_blue
```
Delete Blue Green

```bash
make delete_blue_green
```

## deploy Canary Release
Infrastructure deployment
```bash
make create_canary_release
```

By default the deployment target 100% of requests to Blue Service. In order to update this percentage, the follwing command needs to be applied. In this example 20% on green 80% on blue
```bash
make update_canary_release_configuration green=20 blue=80
```

Delete Canary Release Infrastructure

```bash
make delete_canary_release
```