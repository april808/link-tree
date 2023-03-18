# Link tree

預覽：

CodePen URL:
1. [Link tree(模仿實作)](https://codepen.io/april808/pen/MWBKqyv)
1. [Link tree-white(模仿實作)](https://codepen.io/april808/pen/LYBGwvw)

GitHub:
1. [Link tree(模仿實作)](https://april808.github.io/link-tree/dist/index.html)

說明：

1. 自主開發設計。
1. 使用不同的 font-awesome 作法。
1. 實作CSS Selectors 根據連結關鍵字套用偽類icon。
1. 自適應連結清單 navbar。
1. 切換黑白風格按鈕。
1. 添加進場動畫。~~(疑問紀錄，原先想用 `onload` 網頁載入時就判斷是否預設 `checked` 來套用 `class`，但失敗了。) ~~
1. 找到 `:has()` CSS Selectors 就不用綁定JS監聽套用class了。`.top-nav:has(input[type=“checkbox”]:checked)` 
1. `:is()` 能減少編譯指定父元素。