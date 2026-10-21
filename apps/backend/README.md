# @repo/backend

FastAPI + Python 3.11+，使用 [uv](https://docs.astral.sh/uv/) 管理依赖与虚拟环境。

## 快速开始

```bash
uv sync                 # 安装依赖（等价 pnpm --filter @repo/backend setup）
uv run uvicorn app.main:app --reload   # 启动，http://127.0.0.1:8000/docs
uv run pytest           # 测试
uv run ruff check .     # lint
uv run mypy app         # 类型检查
```

## 结构

```
app/
├── main.py           # create_app 工厂 + CORS + 路由挂载
├── core/config.py    # pydantic-settings 配置（.env）
├── api/
│   ├── router.py     # /api/v1 路由聚合
│   └── routes/       # health.py, items.py（示例 CRUD）
└── schemas/          # Pydantic 模型（common.py 统一响应包裹）
tests/                # pytest
```

约定：所有接口返回 `{ code, message, data }` 包裹结构，前端用 `@repo/utils` 的 `unwrap()` 解析。
