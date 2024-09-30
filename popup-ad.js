(function ($) {
  // 動態添加 Google 字體連結
  var googleFontLink = document.createElement("link");
  googleFontLink.rel = "preconnect";
  googleFontLink.href = "https://fonts.googleapis.com";
  document.head.appendChild(googleFontLink);

  var googleFontLink2 = document.createElement("link");
  googleFontLink2.rel = "preconnect";
  googleFontLink2.href = "https://fonts.gstatic.com";
  googleFontLink2.crossorigin = "anonymous";
  document.head.appendChild(googleFontLink2);

  var googleFontLink3 = document.createElement("link");
  googleFontLink3.rel = "stylesheet";
  googleFontLink3.href =
    "https://fonts.googleapis.com/css2?family=Chocolate+Classical+Sans&family=Figtree:ital,wght@0,300..900;1,300..900&family=Noto+Sans+TC:wght@100..900&display=swap";
  document.head.appendChild(googleFontLink3);

  // 動態添加 Bootstrap Bundle
  var bootstrapScript = document.createElement("script");
  bootstrapScript.src =
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
  bootstrapScript.crossorigin = "anonymous";
  document.head.appendChild(bootstrapScript);

  // 動態添加 Bootstrap scoped CSS
  var bootstrapScopedStyle = document.createElement("style");
  bootstrapScopedStyle.id = -"popup-ad-bootstrap-scoped";
  document.head.appendChild(bootstrapScopedStyle);
  // 動態添加自定 CSS
  var customCSS = document.createElement("style");
  customCSS.type = "text/css";
  customCSS.innerHTML = `:root {
  --dark-yellow: rgba(59, 59, 50, 1);
  --dark-yellow-14: rgba(59, 59, 50, 0.14);
  --ideal-outline-18: rgba(59, 59, 50, 0.18);
  --super_light_yellow: rgba(243, 243, 239, 1);
  --hovered-color: rgba(232, 232, 228, 1);
}

#pop-ad-container p {
  margin: 0;
}

#pop-ad-container {
  margin: 8px;
  padding: 14px;
  border: none;
  box-shadow: 0px 0px 80px 0px rgba(0, 0, 0, 0.18);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.74);
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

#pop-ad-container.offcanvas.offcanvas-bottom {
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: fit-content;
  min-height: 300px;
  max-height: -webkit-fit-content;
  max-height: -moz-fit-content;
  max-height: fit-content;
  max-height: 90lvh;
  width: 806px;
  max-width: 60vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 99999;
  transform: none !important;
  -webkit-transform: none !important;
  -moz-transform: none !important;
  -ms-transform: none !important;
  -o-transform: none !important;
  transition: none !important;
  -webkit-transition: none !important;
  -moz-transition: none !important;
  -ms-transition: none !important;
  -o-transition: none !important;
}

#pop-ad-container .offcanvas-header,
#pop-ad-container .offcanvas-body {
  padding: 0;
}

/* #pop-ad-container .offcanvas-body #pop-ad-img-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 10px;
  width: 100%;
  height: 100%;
} */
#pop-ad-container .offcanvas-body #pop-ad-img-container {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -ms-flex-pack: justify;
      justify-content: space-between;
  -ms-flex-line-pack: start;
      align-content: flex-start;
  gap: 10px;
  /* 行和列之間的間距 */
  width: 100%;
  height: 100%;
}

#pop-ad-container .offcanvas-body #pop-ad-img-container .pop-item {
  width: 100%;
  -ms-flex: 1 1 calc(33.33% - 14px);
      flex: 1 1 calc(33.33% - 14px);
  /* 每行 3 個元素，減去 gap */
  box-sizing: border-box;
  /* 確保 padding 和 border 不會影響寬度 */
}

#pop-ad-container #pop-ad-icon--close {
  position: absolute;
  top: -3px;
  right: -3px;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.2);
}

#pop-ad-container .pop-item {
  background-color: rgb(243, 243, 239);
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  cursor: pointer;
}

#pop-ad-container .pop-item:first-child .pop-item-info {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}

#pop-ad-container .pop-item:first-child .pop-item-info .pop-item-bg {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
      flex-direction: column;
  row-gap: 21px;
}

#pop-ad-container .pop-item:first-child {
  background-image: none !important;
  background: #f3f3ef !important;
}

#pop-ad-container .pop-item:first-child .pop-item-info .pop-item-title {
  color: #333;
  text-align: center;
  font-family: "Chocolate Classical Sans";
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: pre-wrap;
}

#pop-ad-container .pop-item:first-child .pop-item-info .pop-item-price--original {
  color: #333;
  text-align: center;
  font-family: "Figtree";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

#pop-ad-container .pop-item:not(:first-child) .pop-item-info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

#pop-ad-container .pop-item:not(:first-child) .pop-item-info .pop-item-bg {
  margin: 0 6px 6px 6px;
  border-radius: 8px;
  background: rgba(243, 243, 239, 0.16);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  padding: 12px 8px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  -o-border-radius: 8px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
      flex-direction: column;
  row-gap: 6px;
}

#pop-ad-container .pop-item:not(:first-child) .pop-item-info .pop-item-title {
  text-align: center;
  max-width: 96%;
  margin: 0 auto;
  font-weight: 400;
  color: #fff;
  font-family: "Chocolate Classical Sans", "Figtree", sans-serif;
  font-style: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.96px;
}

#pop-ad-container .pop-item:not(:first-child) .pop-item-info .pop-item-content {
  display: -ms-flexbox;
  display: flex;
  -webkit-column-gap: 8px;
     -moz-column-gap: 8px;
          column-gap: 8px;
  -ms-flex-align: baseline;
      align-items: baseline;
  -ms-flex-pack: center;
      justify-content: center;
}

#pop-ad-container .pop-item:not(:first-child) .pop-item-info .pop-item-content .pop-item-price {
  color: #F3F3EF;
  text-align: center;
  font-family: "Figtree";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  /* 121.429% */
}

#pop-ad-container .pop-item:not(:first-child) .pop-item-info .pop-item-price--original {
  color: #F3F3EF;
  text-align: center;
  font-family: "Figtree";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
}

#pop-ad-container .pop-item:not(:first-child) .pop-item-info .pop-item-content .pop-item-price--original {
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  font-family: "Figtree";
  font-size: 9px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  /* 133.333% */
}

.custom-blur-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  display: none;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* .offcanvas-backdrop.fade.show {
  opacity: 1 !important;
  background-color: rgba(0, 0, 0, 0.3) !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  transform:none !important;
  -webkit-transform:none !important;
  -moz-transform:none !important;
  -ms-transform:none !important;
  -o-transform:none !important;
  transition:none !important;
  -webkit-transition:none !important;
  -moz-transition:none !important;
  -ms-transition:none !important;
  -o-transition:none !important;
} */
@media screen and (max-width: 767px) {
  #pop-ad-container {
    padding: 12px;
  }
  #pop-ad-container .offcanvas-body #pop-ad-img-container {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    -ms-flex-pack: justify;
        justify-content: space-between;
    gap: 10px;
    /* 行和列之間的間距 */
    width: 100%;
  }
  #pop-ad-container .offcanvas-body #pop-ad-img-container > .pop-item {
    -ms-flex: 1 1 calc(50% - 14px);
        flex: 1 1 calc(50% - 14px);
    /* 每行 2 個元素，減去 gap */
    box-sizing: border-box;
    /* 確保 padding 和 border 不會影響寬度 */
  }
  #pop-ad-container.offcanvas.offcanvas-bottom {
    min-height: 300px;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    max-width: 90vw;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.84);
    backdrop-filter: blur(38px);
    -webkit-backdrop-filter: blur(38px);
    transition: -webkit-transform 0.15s ease-in-out;
    transition: transform 0.15s ease-in-out;
    transition: transform 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out;
    -webkit-transition: transform 0.15s ease-in-out;
    -moz-transition: transform 0.15s ease-in-out;
    -ms-transition: transform 0.15s ease-in-out;
    -o-transition: transform 0.15s ease-in-out;
  }
  #pop-ad-container .pop-item:not(:first-child) .pop-item-info .pop-item-bg {
    margin: 0 3px 3px 3px;
    background: rgba(243, 243, 239, 0.16);
    backdrop-filter: blur(4.5px);
    -webkit-backdrop-filter: blur(4.5px);
    padding: 6px 8px;
    row-gap: 4px;
  }
}
@media screen and (max-width: 991px) {
  #pop-ad-container .pop-item:not(:first-child) .pop-item-info .pop-item-title {
    text-align: center;
    font-family: "Chocolate Classical Sans", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    /* 116.667% */
    letter-spacing: 0.24px;
  }
  #pop-ad-container .pop-item:first-child .pop-item-info .pop-item-price,
  #pop-ad-container .pop-item:not(:first-child) .pop-item-info .pop-item-price {
    font-size: 12px;
    line-height: normal;
  }
  #pop-ad-container .pop-item:first-child .pop-item-info .pop-item-title {
    font-size: 18px;
    line-height: normal;
  }
  #pop-ad-container .pop-item:not(:first-child) .pop-item-info .pop-item-content .pop-item-price {
    color: #F3F3EF;
    text-align: center;
    font-family: "Figtree", sans-serif;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    /* 127.273% */
  }
  #pop-ad-container .pop-item:not(:first-child) .pop-item-info .pop-item-content .pop-item-price--original {
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    font-family: "Figtree", sans-serif;
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: 11px;
    /* 137.5% */
  }
}
  `;
  document.head.appendChild(customCSS);

  // 添加 html template
  var panelTemplate = `
         <div
          class="offcanvas offcanvas-bottom"
          data-bs-scroll="true"
          data-bs-backdrop="false"
          tabindex="-1"
          id="pop-ad-container"
          aria-labelledby="popAdOffcanvasBottomLabel"
        >
          <div class="offcanvas-header">
            <button
              style="background-color: #e8e8e4"
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              id="pop-ad-icon--close"
            ></button>
          </div>
          <div class="offcanvas-body small">
            <div id="pop-ad-img-container">
              <div class="pop-item" style="box-shadow: none;border:none; background-color:#f3f3ef"></div>
              <div class="pop-item" style="box-shadow: none;border:none; background-color:#f3f3ef"></div>
              <div class="pop-item" style="box-shadow: none;border:none; background-color:#f3f3ef"></div>
              <div class="pop-item" style="box-shadow: none;border:none; background-color:#f3f3ef"></div>
              <div class="pop-item" style="box-shadow: none;border:none; background-color:#f3f3ef"></div>
              <div class="pop-item" style="box-shadow: none;border:none; background-color:#f3f3ef"></div>
              <!-- pop ad 內容將由 JavaScript 動態生成 -->
            </div>
          </div>
        </div>
        <div class="custom-blur-backdrop"></div>
  `;
  document.body.insertAdjacentHTML("beforeend", panelTemplate);
  var Brand = "TDA";
  var tags_chosen = {
    彈性: [
      {
        Description: "example",
        Imgsrc: "https://example.com/imageB1.png",
        Name: "example",
        Tag: "1721875900838",
        TagGroup: "彈性",
      },
    ],
    場合: [
      {
        Description: "example",
        Imgsrc: "https://example.com/imageB1.png",
        Name: "example",
        Tag: "1721875746070",
        TagGroup: "場合",
      },
    ],
    材質: [
      {
        Description: "example",
        Imgsrc: "https://example.com/imageB1.png",
        Name: "example",
        Tag: "1721875867435",
        TagGroup: "材質",
      },
    ],
  };
  // 定義每個標籤對應的圖片
  const tagImages = {
    彈性: [],
    材質: [],
    場合: [],
  };
  let selectedTag = "彈性"; // 這裏可以根據實際選擇動態設置

  const breakpoint = 767;
  $(function () {
    console.log("DOM is ready");

    // 監聽窗口大小變化
    window.addEventListener("resize", function () {
      handleWindowResize();
      handleAdjustAspectRatio()
    });

    window.addEventListener("beforeunload", function () {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("resize", handleAdjustAspectRatio);
    });

    // 首次載入時執行檢查
    handleWindowResize();
    getPopAd();
    var myOffcanvas = document.getElementById("pop-ad-container");
    var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
    $(".custom-blur-backdrop").fadeIn(300);
    setTimeout(function () {
      bsOffcanvas.show();
    }, 500);
    myOffcanvas.addEventListener("hidden.bs.offcanvas", function () {
      // do something...
      $(".custom-blur-backdrop").hide();
    });
    // Fetch the Bootstrap CSS from CDN
    fetch(
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    )
      .then((response) => response.text())
      .then((css) => {
        // Scope the Bootstrap CSS to only work under .custom-scope class
        const scopedCSS = css.replace(
          /(^|\})\s*([^{]+)\s*\{/g,
          function (match, p1, p2) {
            // Ignore keyframes and other special rules
            if (p2.startsWith("@") || p2.startsWith(":root")) {
              return match;
            }
            return p1 + "#pop-ad-container " + p2 + " {";
          }
        );

        // Inject the scoped CSS into the page
        document.getElementById(-"popup-ad-bootstrap-scoped").textContent =
          scopedCSS;
      });
  });

  
  function handleAdjustAspectRatio() {
    const aspectBoxes = $('#pop-ad-container .offcanvas-body #pop-ad-img-container > .pop-item');

    aspectBoxes.each(function() {
      handleAspectRatio(this, 1); // `this` 代表当前 DOM 元素
    });
  }

  function handleAspectRatio(element, ratio) {
    const width = element.offsetWidth;
    element.style.height = width / ratio + "px";
  }

  function handleWindowResize() {
    // 取得當前視窗寬度
    const windowWidth = window.innerWidth;
    const popAdContainer = document.getElementById("pop-ad-container");

    // 當視窗寬度大於等於 767px (桌面版)
    if (windowWidth >= breakpoint) {
      popAdContainer.setAttribute("data-bs-scroll", "true");
    } else {
      popAdContainer.setAttribute("data-bs-scroll", "false");
    }
  }

  function getPopAd() {
    let options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        Brand: Brand,
        Tags: tags_chosen,
        NUM: 18,
      }),
    };
    console.log("tags chosen:", tags_chosen);
    fetch(
      "https://ldiusfc4ib.execute-api.ap-northeast-1.amazonaws.com/v0/extension/recom_product",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        let jsonData = response.Item;
        // 填充每個標籤對應的圖片
        jsonData.forEach((item) => {
          for (const tag in item.Tags) {
            if (item.TagsInclude.includes(tag)) {
              tagImages[tag].push({
                src: item.Imgsrc,
                alt: item.ItemName,
                price: item.price,
                link: item.Link,
              });
            }
          }
        });
        // 初始加載 "彈性" 標籤的圖片
        updatePopAd(tagImages["彈性"]);
      })
      //將 response.Item 的內容更新成頁面中的商品推薦版位
      .catch((err) => {
        console.error(err);
      });
  }

  // 更新pop ad圖片的函數
  function updatePopAd(images) {
    const fakeData = [
      {
        alt: "秋季新品\n限時優惠中",
        price: "",
        original_price: "2024/9/5 至 9/10",
        src: "",
        link: "https://www.tendamotor.com/products/mt-60%E2%84%A2-rs",
      },
      {
        alt: "鱷魚皮革磚色背包",
        price: "NT$ 3,990",
        original_price: "NT$ 4,990",
        src: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://www.tendamotor.com/products/mt-60%E2%84%A2-rs",
      },
      {
        alt: "時尚米白風衣外套",
        price: "NT$ 7,990",
        original_price: "NT$ 8,990",
        src: "https://images.unsplash.com/photo-1712570193685-1fb1bddfafda?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://www.tendamotor.com/products/mt-60%E2%84%A2-rs",
      },
      {
        alt: "純白西裝套裝",
        price: "NT$ 6,490",
        original_price: "8,888",
        src: "https://images.unsplash.com/photo-1583686543381-2608547b3963?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://www.tendamotor.com/products/mt-60%E2%84%A2-rs",
      },
      {
        alt: "簡約午夜黑背心",
        price: "NT$ 1,890",
        original_price: "NT$ 2,890",
        src: "https://images.unsplash.com/photo-1551833726-b6549cd73566?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://www.tendamotor.com/products/mt-60%E2%84%A2-rs",
      },
      {
        alt: "莫蘭迪藍西裝套裝",
        price: "",
        original_price: "NT$ 6,990",
        src: "https://images.unsplash.com/photo-1561357747-a5ebd644c2d6?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: "https://www.tendamotor.com/products/mt-60%E2%84%A2-rs",
      },
    ];
    const items = fakeData
      .map(
        (img) =>
          `
  <div class="pop-item"  onclick="window.open('${img.link}')" style="background: linear-gradient(0deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0.24) 100%), url(${
    img.src
  }) lightgray 50% / cover no-repeat;">
     <div class="pop-item-info" style="width: 100%;"
     >
       <div class="pop-item-bg">
        <div class="pop-item-title">${img.alt}</div>
           ${
             img.price && img.src
               ? `<div class="pop-item-content">
              <p class="pop-item-price">${img.price}</p>
              <p class="pop-item-price--original">${img.original_price}</p>`
               : `<p class="pop-item-price--original">$${img.original_price}</p>`
           }
          </div>
        </div>
        </div>
     </div>
  </div>
        `
      )
      .join("");
    $("#pop-ad-img-container").html(items);
    handleAdjustAspectRatio()
  }
})(jQuery);
