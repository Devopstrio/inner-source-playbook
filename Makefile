.PHONY: help build up down test lint migrate analyze-repos generate-catalog onboarding-run

help:
	@echo "InnerSource Playbook - Management Commands"
	@echo "----------------------------------------"
	@echo "build           : Build all containers"
	@echo "up              : Start all services"
	@echo "down            : Stop all services"
	@echo "test            : Run all tests"
	@echo "lint            : Run linting checks"
	@echo "migrate         : Run database migrations"
	@echo "analyze-repos   : Run contribution analytics on internal repos"
	@echo "generate-catalog: Build the internal reuse catalog"
	@echo "onboarding-run : Start a developer onboarding workflow"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/api
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

analyze-repos:
	docker-compose exec api python scripts/analyze/contribution_flow.py

generate-catalog:
	docker-compose exec api python scripts/reports/reuse_catalog.py

onboarding-run:
	docker-compose exec api python scripts/onboarding/new_contributor.py
