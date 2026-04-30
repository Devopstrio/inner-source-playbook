from fastapi import APIRouter
from app.api.v1.endpoints import (
    auth, repositories, contributors, analytics, contributions, governance, dashboard
)

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(repositories.router, prefix="/repositories", tags=["repositories"])
api_router.include_router(contributors.router, prefix="/contributors", tags=["contributors"])
api_router.include_router(analytics.router, prefix="/analytics", tags=["analytics"])
api_router.include_router(contributions.router, prefix="/contributions", tags=["contributions"])
api_router.include_router(governance.router, prefix="/governance", tags=["governance"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
