# 🌟 AI 皮膚分析系統

基於 MediaPipe 的智能皮膚檢測與分析系統，提供個人化的保養建議與行動指南。

## 📋 專案簡介

這是一個整合了 AI 臉部辨識、問卷調查和數據分析的 Web 應用程式，能夠：
- 📸 即時拍照並進行臉部偵測
- 🎯 分析 52 個臉部特徵點（blendshapes）
- 📊 評估 5 大皮膚指標（光澤、氣色、瑕疵、油水平衡、均勻度）
- 💡 提供 10 種個人化行動建議
- 📈 視覺化展示分析結果（雷達圖、長條圖）

## 🚀 快速開始

### 環境需求

- **前端**: 支援 ES6 的現代瀏覽器（Chrome、Safari、Edge）
- **後端**: PHP 7.4+ (可選，支援 Mock 模式)
- **相機權限**: 需允許瀏覽器存取相機

### 安裝步驟

1. **Clone 專案**
```bash
git clone <repository-url>
cd test
```

2. **設定 PHP 環境（選用）**
```bash
# 使用 PHP 內建伺服器
php -S localhost:8000

# 或使用 Apache/Nginx
# 確保網站根目錄指向專案資料夾
```

3. **開啟應用程式**
```
瀏覽器訪問: http://localhost:8000/survey_new.html
```

### 開發模式（Mock 資料）

如不需連接後端，可使用假資料模式：

1. 開啟 `js/config.js`
2. 設定 `SKIP_UPLOAD: true`
3. 系統將使用 `api/mock_result.json` 的模擬資料

## 📁 專案結構

```
test/
├── 📄 主要頁面
│   ├── index.html              # 入口頁（重導向）
│   ├── survey_new.html        # 問卷調查頁
│   ├── analyze.html            # 拍照分析頁
│   └── result_new.html         # 結果展示頁
│
├── 📁 assets/                  # 前端資源
│   ├── app.css                 # 主樣式表
│   ├── app.js                  # 核心工具函數
│   ├── action-recommendations.css  # 行動推薦樣式
│   ├── mediapipe-face.js       # MediaPipe 整合
│   └── mediapipe/              # WASM 引擎
│
├── 📁 js/                      # JavaScript 模組
│   ├── config.js               # 系統設定檔
│   ├── action-recommendations.js    # 行動推薦管理器
│   └── init-action-recommendations.js  # 初始化腳本
│
├── 📁 api/                     # PHP 後端 API
│   ├── _bootstrap.php          # 基礎設定
│   ├── analyze.php             # 照片分析 API
│   ├── login.php               # 登入 API
│   └── mock_result.json        # 模擬資料
│
├── 📁 data/                    # JSON 資料
│   └── action-recommendations.json  # 行動建議資料
│
├── 📁 actions/                 # 教學媒體
│   ├── *.mp4                   # 教學影片
│   └── *.png                   # 教學圖片
│
└── 📁 docs/                    # 技術文檔
    ├── ACTION_RECOMMENDATIONS_INTEGRATION.md
    ├── B_SECTION_IMPLEMENTATION.md
    └── ...
```

## 🎮 使用流程

```
1️⃣ 問卷調查 (survey_new.html)
   填寫 9 題問卷（年齡、膚況、作息、飲食等）
   ↓
2️⃣ 拍照分析 (analyze.html)
   MediaPipe 即時偵測臉部
   品質檢測（光線、清晰度、對齊）
   ↓
3️⃣ 結果展示 (result_new.html)
   ├─ A 區：活力氣色指南（LLM 分析 + 行動建議）
   ├─ B 區：智能膚況解析（雷達圖 + 5 項指標）
   ├─ C 區：由內而外養膚（生活建議）
   └─ D 區：智慧配方（產品推薦）
```

## 🔧 核心技術

| 技術 | 版本/用途 |
|------|----------|
| **MediaPipe Face Landmarker** | v0.10.14 - 臉部特徵點偵測 |
| **Canvas 2D API** | 雷達圖/長條圖繪製 |
| **LocalStorage** | 前端資料暫存 |
| **PHP** | 後端 API 處理 |
| **FPS 限制** | 30 FPS 節省電力 |

## 📊 分析指標

系統會評估以下 5 項皮膚指標（分數 0-100）：

1. **光澤度 (Glow)**: 皮膚光澤與透亮度
2. **氣色 (Complexion)**: 整體氣色健康度
3. **瑕疵 (Blemish)**: 皮膚瑕疵程度
4. **油水平衡 (Oil Balance)**: 肌膚油脂分佈
5. **均勻度 (Evenness)**: 膚色均勻程度

## 🛠️ 設定檔說明

### js/config.js

```javascript
const CONFIG = {
  LIFF_ID: '',                    // LINE LIFF ID
  FPS_LIMIT: 30,                  // 偵測幀率限制
  SKIP_UPLOAD: false,             // 是否跳過後端上傳
  FACE_ALIGNMENT_THRESHOLD: 0.05, // 臉部對齊閾值
  // ...更多設定
};
```

## 📝 API 文檔

### POST /api/analyze.php

分析照片並回傳皮膚數據

**請求參數：**
```json
{
  "photo": "base64_encoded_image",
  "blendshapes": [...],  // 52 個臉部特徵參數
  "quality": {...}       // 品質檢測結果
}
```

**回應格式：**
```json
{
  "success": true,
  "data": {
    "glow": 85,
    "complexion": 78,
    "blemish": 92,
    "oilBalance": 80,
    "evenness": 88
  }
}
```

## 🐛 除錯模式

1. 開啟瀏覽器開發者工具（F12）
2. 查看 Console 輸出
3. 檢查 Network 標籤確認 API 請求
4. LocalStorage 中會保存：
   - `user_photo`: 拍攝照片
   - `skin_metrics`: 分析結果

## 🔒 安全性說明

- ✅ MIME 類型驗證
- ✅ JSON 安全解析
- ⚠️ 開發中：CSRF 保護、XSS 過濾

## 📖 延伸閱讀

詳細技術文檔請參考 `/docs/` 資料夾：

- [行動推薦整合指南](docs/ACTION_RECOMMENDATIONS_INTEGRATION.md)
- [B 區實作說明](docs/B_SECTION_IMPLEMENTATION.md)
- [C 區實作說明](docs/C_SECTION_IMPLEMENTATION.md)

## 🤝 貢獻指南

歡迎提交 Issue 或 Pull Request！

## 📄 授權

本專案為學術研究用途。

---

**最後更新**: 2026-01-24
