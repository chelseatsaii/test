// API 配置
export const API_CONFIG = {
    // n8n API (開發環境使用 localhost,正式環境改為 Cloud Run URL)
    N8N_ANALYZE_URL: 'https://your-n8n.run.app/webhook/analyze',

    // GCP Cloud Run API
    GCP_RESULT_URL: 'https://your-api.run.app/api/result',
    GCP_GA_EVENTS_URL: 'https://your-api.run.app/api/ga-events',

    // LIFF
    LIFF_ID: 'YOUR_LIFF_ID', // 請替換為實際的 LIFF ID

    // 超時設定 (毫秒)
    TIMEOUT: 30000,

    // 開發模式 (設為 true 時使用 mock 資料)
    DEV_MODE: true
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
