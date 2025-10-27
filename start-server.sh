#!/bin/bash
# 簡單本地伺服器啟動腳本

# 檢查是否安裝了 Python
if command -v python3 &> /dev/null; then
    echo "🚀 啟動 Python 3 伺服器..."
    cd "$(dirname "$0")"
    python3 -m http.server 8000
    echo "✅ 伺服器運行在 http://localhost:8000"
elif command -v python &> /dev/null; then
    echo "🚀 啟動 Python 2 伺服器..."
    cd "$(dirname "$0")"
    python -m SimpleHTTPServer 8000
    echo "✅ 伺服器運行在 http://localhost:8000"
elif command -v node &> /dev/null; then
    echo "🚀 啟動 Node.js 伺服器..."
    cd "$(dirname "$0")"
    npx http-server
else
    echo "❌ 找不到 Python 或 Node.js"
    echo "請安裝其中一個來運行本地伺服器"
fi
