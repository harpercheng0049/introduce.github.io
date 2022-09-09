/* 建立資料庫 */

const topics = [
    {
      id: 1,
      question: "個人簡介",
      answer:
        "Hi 我是 Harper，目前是一名媒體動畫師，有4-5年平面設計、動畫影片等工作經驗，在2021年底時，有想要轉職成工程師的念頭，當時透過了「線上課程」與「網路資源」來做學習，但在學習過程中，未能將學習到的知識，統整為「系統化」的筆記，導致學習效果不佳，學到某一個段落後，就沒有再繼續往下學。直到2022年5月，經過仔細思考後，調整好心態，將之前的課程重新複習了一次，並開始使用Notion來做筆記，將學習到的知識進行分類與紀錄，重新開始了轉職之路。"
    },
    {
      id: 2,
      question: "為了成為軟體工程師，曾做過什麼努力？",
      answer:
        "「安排每個月的學習清單」+「加入前端的Line群組」+「透過不同平台來獲取知識」例如:X角線上課程、Udemy、YouTube、it 鐵人賽文章、freeCodeCamp等。"
    },
    {
      id: 3,
      question: "如果參與這個計畫，會怎麼安排學習時間？",
      answer: "目前為在職狀態。預計平日安排2小時/天、假日安排6小時/天的學習時間。"
    },
    {
      id: 4,
      question: "是否有想要加入的軟體公司？為什麼想加入該公司？",
      answer:
        "沒有，覺得自己目前是白紙一張，還不確定自己喜好哪種產業，但會希望該公司有前輩可以帶領，而非一人單打獨鬥。"
    },
    {
      id: 5,
      question: "請描述一件你曾經碰到最困難的事情，如何克服？",
      answer:
        "在學習前端的過程中，遇到了幾次的撞牆期。克服方式: 調適心態、安排可負擔的學習任務、適時的休息。"
    },
    {
      id: 6,
      question: "關於這份申請網頁，請分享一個你開發時的技術心得",
      answer:
        "此網頁採用的是左右切半的視覺風格，左邊為要呈現的資料，右邊為圖片，由於左邊的空間有限，所以將資料儲存在陣列裡面，要使用的時候在呼叫出來。"
    },
    {
      id: 7,
      question: "其他想要對我們說的事情？",
      answer:
        "這是我第一次報名實體課程，之前的課程都是預錄好的，沒有人可以討論，也沒有團隊合作的經驗，特別期待這次能夠順利錄取，跟大家一起學習。"
    }
  ];
  
  /* 
  創建常數:
  number
  question
  answer
  */
  const number = document.getElementById("number");
  const question = document.getElementById("question");
  const answer = document.getElementById("answer");
  
  /* 創建 BTN 按鈕 */
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");
  
  /* 當document被完整的讀取跟解析後就會被觸發 */
  window.addEventListener("DOMContentLoaded", function () {
    slide();
  });
  
  /* 初始值為 0 (index) */
  let currentItem = 0;
  
  /* 建立 函式Slide() */
  function slide() {
    const item = topics[currentItem];
    number.textContent = item.id;
    question.textContent = item.question;
    answer.textContent = item.answer;
  }
  
  /*
  topics.length - 1 = 最後一個item
  */
  
  /* 建立監聽事件 nextBtn */
  nextBtn.addEventListener("click", function () {
    currentItem++;
    // 輪過一輪之後，currentItem 需歸零
    if (currentItem > topics.length - 1) {
      currentItem = 0;
    }
    slide();
  });
  
  /* 建立監聽事件 prevBtn */
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = topics.length - 1;
    }
    slide();
  });
  

  