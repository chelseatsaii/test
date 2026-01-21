/**
 * 應用程式設定檔
 * 集中管理所有設定參數，方便維護與調整
 */
export const CONFIG = {
    // LINE LIFF 設定
    LIFF_ID: '2008940492-WAo5zGIa',

    // 效能設定
    FPS_LIMIT: 30, // 限制在 30 FPS 以節省電力

    // 對齊檢測閾值
    ALIGNMENT_THRESHOLDS: {
        // 完美對準：距離 < 30px，比例 0.85-1.0
        PERFECT: {
            dist: 30,
            ratioMin: 0.85,
            ratioMax: 1.0
        },
        // 良好對準：距離 < 45px，比例 0.65-1.15
        GOOD: {
            dist: 45,
            ratioMin: 0.65,
            ratioMax: 1.15
        }
    },

    // 開發模式設定
    SKIP_UPLOAD: true, // 跳過後端上傳（開發階段）

    // 框線座標 (對應 CSS inset: 74px 44px 98px 44px)
    // 相機寬度 360, 高度 480
    GUIDE: {
        cx: 180, // 中心 X
        cy: 228, // 中心 Y
        w: 272,  // 寬度
        h: 308   // 高度
    }
};
