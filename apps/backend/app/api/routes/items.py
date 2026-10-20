"""Items 示例 CRUD（内存存储，演示 API 分层结构，接入数据库时替换 repository 即可）。"""

from fastapi import APIRouter, HTTPException, status

from app.schemas.common import ApiEnvelope, ok
from app.schemas.item import Item, ItemCreate

router = APIRouter()

_DB: dict[int, Item] = {}
_NEXT_ID = 1


@router.get("", response_model=ApiEnvelope[list[Item]])
def list_items() -> ApiEnvelope[list[Item]]:
    return ok(list(_DB.values()))


@router.post("", response_model=ApiEnvelope[Item], status_code=status.HTTP_201_CREATED)
def create_item(payload: ItemCreate) -> ApiEnvelope[Item]:
    global _NEXT_ID
    item = Item(id=_NEXT_ID, **payload.model_dump())
    _DB[_NEXT_ID] = item
    _NEXT_ID += 1
    return ok(item)


@router.get("/{item_id}", response_model=ApiEnvelope[Item])
def get_item(item_id: int) -> ApiEnvelope[Item]:
    item = _DB.get(item_id)
    if item is None:
        raise HTTPException(status_code=404, detail="item not found")
    return ok(item)


@router.delete("/{item_id}", response_model=ApiEnvelope[dict[str, int]])
def delete_item(item_id: int) -> ApiEnvelope[dict[str, int]]:
    if item_id not in _DB:
        raise HTTPException(status_code=404, detail="item not found")
    del _DB[item_id]
    return ok({"deleted": item_id})