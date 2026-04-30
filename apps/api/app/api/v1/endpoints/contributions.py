from fastapi import APIRouter
router = APIRouter()
@router.get('/')
def get_contributions():
    return {'status': 'ok'}
