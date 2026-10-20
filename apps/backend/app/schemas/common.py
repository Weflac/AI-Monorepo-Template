"""统一响应包裹结构（与 @repo/utils 的 unwrap 对应）。"""

from typing import Generic, TypeVar

from pydantic import BaseModel

T = TypeVar("T")


class ApiEnvelope(BaseModel, Generic[T]):
    code: int = 0
    message: str = "ok"
    data: T


def ok(data: T) -> ApiEnvelope[T]:
    return ApiEnvelope(code=0, message="ok", data=data)