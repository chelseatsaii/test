// API 配置
export const API_CONFIG = {
    // n8n Webhook URL
    N8N_ANALYZE_URL: 'https://kaden-calisthenical-jin.ngrok-free.dev/webhook/analyze',
    N8N_RESULT_URL: 'https://kaden-calisthenical-jin.ngrok-free.dev/webhook/result',

    // GCP Cloud Run API (備用)
    GCP_RESULT_URL: 'https://your-api.run.app/api/result',
    GCP_GA_EVENTS_URL: 'https://your-api.run.app/api/ga-events',

    // LIFF
    LIFF_ID: 'YOUR_LIFF_ID', // 請替換為實際的 LIFF ID

    // 超時設定 (毫秒)
    TIMEOUT: 60000, // 增加到 60 秒以應對 AI 分析

    // 輪詢間隔 (毫秒)
    POLL_INTERVAL: 3000,

    // 開發模式 (設為 true 時使用 mock 資料)
    DEV_MODE: false
};

// GA4 配置
export const GA_CONFIG = {
    MEASUREMENT_ID: 'G-XXXXXXXXXX' // 請替換為實際的 GA4 Measurement ID
};

// 環境判斷
export function getApiUrl(endpoint) {
    if (API_CONFIG.DEV_MODE) {
        // 開發模式使用本地 mock 資料
        return './api/mock_result.json';
    }
    return endpoint;
}

// 取得 n8n 分析 URL
export function getAnalyzeUrl() {
    if (API_CONFIG.DEV_MODE) {
        return null; // 開發模式不呼叫 API
    }
    return API_CONFIG.N8N_ANALYZE_URL;
}

// 取得 n8n 結果 URL
export function getResultUrl(sessionId) {
    if (API_CONFIG.DEV_MODE) {
        return './api/mock_result.json';
    }
    return `${API_CONFIG.N8N_RESULT_URL}?session_id=${sessionId}`;
}
