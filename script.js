// 預設模板內容
const templates = {
    workshop: `親愛的參與者，您好：

感謝您報名參加本次工作坊，為確保活動順利進行，請您注意以下事項：

【活動資訊】
• 活動名稱：{{activityName}}
• 活動時間：請依照報名時提供的時間準時參加
• 活動地點：請依照報名資訊前往指定地點

【準備事項】
• 請攜帶筆記本和筆，方便記錄重點內容
• 建議穿著舒適的服裝，以便參與互動活動
• 請提前10-15分鐘到場，以便簽到和準備

【注意事項】
• 活動期間請將手機調至靜音或震動模式
• 歡迎積極參與討論和互動
• 如有任何問題，請隨時向工作人員詢問

期待與您在工作坊中相見！

祝好
主辦單位`,

    meeting: `各位與會者，您好：

感謝您參與本次會議，為確保會議順利進行，請您留意以下重要事項：

【會議資訊】
• 會議主題：{{activityName}}
• 會議時間：請準時參加，避免遲到影響議程
• 會議地點：請依照通知前往指定會議室

【準備事項】
• 請事先閱讀會議資料和議程
• 準備相關文件和資料供討論使用
• 建議攜帶筆記本記錄重要決議

【會議規範】
• 請準時出席，如無法參加請提前告知
• 會議期間請將手機調至靜音模式
• 積極參與討論，踴躍發表意見
• 尊重他人發言，維持良好會議秩序

期待您的參與，共同促成會議成功！

敬祝
工作順利
會議主辦方`,

    event: `親愛的朋友，您好：

很高興邀請您參加本次活動，為了讓大家都能有美好的體驗，請您注意以下事項：

【活動詳情】
• 活動名稱：{{activityName}}
• 活動時間：請依照邀請函時間準時參加
• 活動地點：請依照地址指引前往現場

【參加須知】
• 請攜帶邀請函或確認信件以便入場
• 建議提前15-20分鐘抵達現場
• 如需停車，請提前了解停車資訊

【活動安排】
• 現場將有簽到處，請先完成報到
• 活動期間歡迎與其他參與者交流互動
• 如有特殊需求，請向現場工作人員反映

【溫馨提醒】
• 請保持手機暢通，以便接收活動相關通知
• 歡迎在社群媒體分享活動照片
• 如遇緊急狀況無法參加，請提前通知主辦方

期待在活動中與您相見！

祝您
生活愉快
活動主辦團隊`,

    training: `學員您好：

歡迎參加本次培訓課程，為確保學習效果最佳，請您詳閱以下須知：

【課程資訊】
• 課程名稱：{{activityName}}
• 上課時間：請準時出席，遲到可能影響學習進度
• 上課地點：請依照課程通知前往指定教室

【學習準備】
• 請攜帶筆記本和筆，做好學習筆記
• 建議準備錄音設備（如需要），方便複習
• 如有課前資料，請事先預習

【課程規定】
• 請準時出席，缺課可能影響結業認證
• 課程期間請專心聽講，避免使用手機
• 積極參與課堂討論和實作練習
• 尊重講師和其他學員

【其他事項】
• 課程期間提供茶水，如有特殊飲食需求請告知
• 完成課程後將頒發結業證書
• 如有學習問題，歡迎課後與講師討論

祝您學習愉快，收穫滿滿！

此致
敬禮
培訓中心`,

    conference: `尊敬的與會貴賓，您好：

誠摯感謝您參與本次會議論壇，為確保活動圓滿成功，敬請留意以下重要資訊：

【會議資訊】
• 會議主題：{{activityName}}
• 會議時間：請依照議程準時出席各場次
• 會議地點：請依照指引前往各會議廳

【報到須知】
• 請攜帶身分證件和邀請函完成報到
• 報到時間建議提前30分鐘，以免排隊等候
• 現場將提供會議手冊和相關資料

【會議安排】
• 請依照議程表參與有興趣的場次
• 各場次間有休息時間，可把握交流機會
• 午餐和茶歇將在指定區域提供

【專業禮儀】
• 會議期間請將手機調至靜音或震動
• 歡迎於Q&A時間提問和分享見解
• 請尊重講者和其他與會者
• 如需拍照或錄影，請遵守現場規定

期待您的蒞臨指導，共同創造豐富的學習交流！

順頌
商祺
會議籌備委員會`
};

// DOM 元素
const activityNameInput = document.getElementById('activity-name');
const activityTemplateSelect = document.getElementById('activity-template');
const activityContentTextarea = document.getElementById('activity-content');
const generateBtn = document.getElementById('generate-btn');
const resultText = document.getElementById('result-text');
const copyBtn = document.getElementById('copy-btn');
const clearBtn = document.getElementById('clear-btn');
const copyFeedback = document.getElementById('copy-feedback');

// 提醒選項
const reminderOptions = {
    punctual: '• 請務必準時抵達，並攜帶必要的證件或物品',
    dress: '• 請著裝整齊舒適，符合一般場合需求',
    equipment: '• 建議攜帶筆電、充電器或筆記本以便記錄重要內容',
    preparation: '• 請事先閱讀相關資料並做好充分準備',
    catering: '• 活動將提供餐飲或茶點，建議自備環保餐具',
    outdoor: '• 若有戶外環節，請注意防曬並攜帶雨具備用',
    phone: '• 請將手機調整至靜音或震動模式，避免干擾他人'
};

// 事件監聽器
activityTemplateSelect.addEventListener('change', handleTemplateChange);
generateBtn.addEventListener('click', generateNotice);
copyBtn.addEventListener('click', copyToClipboard);
clearBtn.addEventListener('click', clearResult);

// 提醒選項控制按鈕
document.getElementById('select-all-reminders').addEventListener('click', selectAllReminders);
document.getElementById('clear-all-reminders').addEventListener('click', clearAllReminders);

// 處理模板選擇
function handleTemplateChange() {
    const selectedTemplate = activityTemplateSelect.value;
    if (selectedTemplate && templates[selectedTemplate]) {
        activityContentTextarea.value = templates[selectedTemplate];
    } else {
        activityContentTextarea.value = '';
    }
}

// 生成行前通知
function generateNotice() {
    const activityName = activityNameInput.value.trim();
    const activityContent = activityContentTextarea.value.trim();
    
    // 驗證必要欄位
    if (!activityName) {
        alert('請輸入活動名稱');
        activityNameInput.focus();
        return;
    }
    
    if (!activityContent) {
        alert('請選擇模板或輸入活動內容');
        activityContentTextarea.focus();
        return;
    }
    
    // 替換模板中的變數
    let finalContent = activityContent.replace(/\{\{activityName\}\}/g, activityName);
    
    // 收集選中的提醒選項
    const selectedReminders = getSelectedReminders();
    
    // 如果有選中的提醒選項，添加提醒內容
    if (selectedReminders.length > 0) {
        const reminderText = `

【重要提醒】
${selectedReminders.join('\n')}
• 如遇不可抗力因素導致活動異動，將以最新通知為準
• 活動相關問題請隨時與主辦方聯繫
• 期待您的參與，謝謝！`;
        
        finalContent += reminderText;
    }
    
    // 顯示結果
    resultText.value = finalContent;
    copyBtn.disabled = false;
    
    // 自動滾動到結果區域
    resultText.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// 複製到剪貼簿
async function copyToClipboard() {
    if (!resultText.value.trim()) {
        return;
    }
    
    try {
        await navigator.clipboard.writeText(resultText.value);
        showCopyFeedback();
    } catch (err) {
        // 降級方案：使用傳統方法
        resultText.select();
        document.execCommand('copy');
        showCopyFeedback();
    }
}

// 顯示複製成功回饋
function showCopyFeedback() {
    copyFeedback.classList.add('show');
    setTimeout(() => {
        copyFeedback.classList.remove('show');
    }, 2000);
}

// 獲取選中的提醒選項
function getSelectedReminders() {
    const selectedReminders = [];
    const checkboxes = document.querySelectorAll('.reminder-options input[type="checkbox"]:checked');
    
    checkboxes.forEach(checkbox => {
        const reminderKey = checkbox.value;
        if (reminderOptions[reminderKey]) {
            selectedReminders.push(reminderOptions[reminderKey]);
        }
    });
    
    return selectedReminders;
}

// 全選提醒選項
function selectAllReminders() {
    const checkboxes = document.querySelectorAll('.reminder-options input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = true;
    });
}

// 清除所有提醒選項
function clearAllReminders() {
    const checkboxes = document.querySelectorAll('.reminder-options input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}

// 清除結果
function clearResult() {
    if (confirm('確定要清除生成的內容嗎？')) {
        resultText.value = '';
        copyBtn.disabled = true;
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 設定初始狀態
    copyBtn.disabled = true;
    
    // 添加輸入驗證
    activityNameInput.addEventListener('input', function() {
        this.style.borderColor = this.value.trim() ? '#e2e8f0' : '#fed7d7';
    });
    
    activityContentTextarea.addEventListener('input', function() {
        this.style.borderColor = this.value.trim() ? '#e2e8f0' : '#fed7d7';
    });
    
    // 結果文本區域變化時啟用/禁用複製按鈕
    resultText.addEventListener('input', function() {
        copyBtn.disabled = !this.value.trim();
    });
    
    // 鍵盤快捷鍵
    document.addEventListener('keydown', function(e) {
        // Ctrl+Enter 或 Cmd+Enter 生成通知
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            generateNotice();
        }
        
        // Ctrl+C 或 Cmd+C 在結果區域時複製
        if ((e.ctrlKey || e.metaKey) && e.key === 'c' && document.activeElement === resultText) {
            copyToClipboard();
        }
    });
});
