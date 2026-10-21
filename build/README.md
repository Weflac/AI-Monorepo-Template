# build — 构建与交付

| 路径                         | 用途                                          |
| ---------------------------- | --------------------------------------------- |
| `docker/Dockerfile.frontend` | 前端多阶段构建（pnpm build → nginx 静态托管） |
| `docker/Dockerfile.backend`  | 后端镜像（uv sync → uvicorn）                 |
| `docker/docker-compose.yml`  | 一键起前后端（本地/演示环境）                 |

## 使用

```bash
docker compose -f build/docker/docker-compose.yml up --build
# 前端 http://localhost:5173 -> nginx :80（容器内），后端 http://localhost:8000
```

CI 建议（GitHub Actions 示例见 `.github/workflows/ci.yml`）：
install → lint/typecheck → test → build → docker build。
