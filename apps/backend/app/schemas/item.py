"""Item 相关 Pydantic 模型。"""

from pydantic import BaseModel, Field


class ItemCreate(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    description: str | None = Field(default=None, max_length=500)
    price: float = Field(ge=0)


class Item(ItemCreate):
    id: int