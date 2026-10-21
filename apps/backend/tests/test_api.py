"""API 冒烟测试。"""

from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_health() -> None:
    resp = client.get("/api/v1/health")
    assert resp.status_code == 200
    body = resp.json()
    assert body["status"] == "ok"
    assert "version" in body


def test_item_crud() -> None:
    # create
    resp = client.post("/api/v1/items", json={"name": "demo", "price": 9.9})
    assert resp.status_code == 201
    created = resp.json()
    assert created["code"] == 0
    item_id = created["data"]["id"]

    # list
    resp = client.get("/api/v1/items")
    assert resp.status_code == 200
    assert any(i["id"] == item_id for i in resp.json()["data"])

    # get
    resp = client.get(f"/api/v1/items/{item_id}")
    assert resp.status_code == 200
    assert resp.json()["data"]["name"] == "demo"

    # delete
    resp = client.delete(f"/api/v1/items/{item_id}")
    assert resp.status_code == 200

    # 404
    resp = client.get(f"/api/v1/items/{item_id}")
    assert resp.status_code == 404