namespace=app
green=0
blue=100
requirements:
	kubectl apply -f kubernetes/requirements/namespace.yml
	helm upgrade --install -f kubernetes/requirements/traefik-value.yml traefik stable/traefik --namespace app --version 1.61.1

build_image:
	docker build -t breizhcamp app/
create_rolling_update:
	@echo "\n--- Deploy Rolling/Update infrastructure (Blue)\n"
	kubectl -n $(namespace) apply -f kubernetes/rolling-update/deployment_blue.yml
	kubectl -n $(namespace) apply -f kubernetes/rolling-update/service.yml
	kubectl -n $(namespace) apply -f kubernetes/rolling-update/ingress.yml

update_rolling_update_to_green:
	@echo "\n--- Update to Green Version through Rolling update \n"
	kubectl -n $(namespace) apply -f kubernetes/rolling-update/deployment_green.yml


update_rolling_update_to_blue:
	@echo "\n--- Update to Blue Version through Rolling update \n"
	kubectl -n $(namespace) apply -f kubernetes/rolling-update/deployment_blue.yml

delete_rolling_update:
	@echo "\n--- Delete Rolling/Update infrastructure (Ingress, Service, Deployment)\n"
	kubectl -n $(namespace) delete ingress grid
	kubectl -n $(namespace) delete service grid
	kubectl -n $(namespace) delete deployment grid


create_blue_green:
	@echo "\n--- Deploy Blue/Green infrastructure (Blue)\n"
	kubectl -n $(namespace) apply -f kubernetes/blue-green/deployment_blue.yml
	kubectl -n $(namespace) apply -f kubernetes/blue-green/deployment_green.yml
	kubectl -n $(namespace) apply -f kubernetes/blue-green/service_blue.yml
	kubectl -n $(namespace) apply -f kubernetes/blue-green/service_green.yml
	kubectl -n $(namespace) apply -f kubernetes/blue-green/ingress_blue.yml

update_blue_green_to_green:
	@echo "\n--- Update to Green Version through Blue/Green Mode \n"
	kubectl -n $(namespace) apply -f kubernetes/blue-green/ingress_green.yml


update_blue_green_to_blue:
	@echo "\n--- Update to Green Version through Blue/Green Mode \n"
	kubectl -n $(namespace) apply -f kubernetes/blue-green/ingress_blue.yml

delete_blue_green:
	kubectl -n $(namespace) delete ingress grid
	kubectl -n $(namespace) delete service grid-green grid-blue
	kubectl -n $(namespace) delete deployment grid-green grid-blue


create_canary_release:
	@echo "\n--- Deploy Canary Release infrastructure \n"
	kubectl -n $(namespace) apply -f kubernetes/canary-release/deployment_blue.yml
	kubectl -n $(namespace) apply -f kubernetes/canary-release/deployment_green.yml
	kubectl -n $(namespace) apply -f kubernetes/canary-release/service_blue.yml
	kubectl -n $(namespace) apply -f kubernetes/canary-release/service_green.yml
	kubectl -n $(namespace) apply -f kubernetes/canary-release/ingress.yml

update_canary_release_configuration:
	@echo "\n--- Update Canary Release with configuration: green=$(green) blue=$(blue) \n"
	kubectl -n $(namespace) patch ingress grid --patch '{ "metadata": { "annotations": { "traefik.ingress.kubernetes.io/service-weights": "grid-blue: $(blue)\ngrid-green: $(green)"} } }'


delete_canary_release:
	kubectl -n $(namespace) delete ingress grid
	kubectl -n $(namespace) delete service grid-green grid-blue
	kubectl -n $(namespace) delete deployment grid-green grid-blue


