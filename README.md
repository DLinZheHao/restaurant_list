# 餐廳列表

### 介紹
<p>
    這是一個能夠使用關鍵字或是類別搜尋餐廳的清單網站。
</p>

#### 功能
<ul>
    <li>瀏覽餐廳名單</li>
    <li>搜尋餐廳並顯示</li>
    <li>查看個別餐廳資訊</li>
    <li>編輯餐廳資訊</li>
    <li>刪除餐廳</li>
    <li>新增餐廳</li>
    <li>點擊icon連接至地圖</li>
</ul>

### 環境設定
#### 環境變數儲存在 config.env
    
    // 插件 .prettierrc (vscode 插件
    // nodemon 安裝
    "body-parser": "^1.20.1",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "express-handlebars": "^3.0.0",
    "method-override": "^3.0.0",
    "mongoose": "^6.9.0"

### 使用方式
1.將專案 clone 至本地端

    git clone https://github.com/DLinZheHao/restaurant_list.git
    
2.安裝 npm 套件

    npm install
3.安裝 環境

    npm install
4.安裝 nodemon

    npm install -g nodemon

5.啟動伺服器

    npm run start
    
6.若看見此行訊息則代表順利運行，代表啟動成功

    listening on port 3000!
    
8.你可以在瀏覽器輸入 http://localhost:3000 瀏覽內容
