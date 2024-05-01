import styles from "./FourCards.module.css";

const cardInfos = [
  {
    Img: `https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image1.png?raw=true`,
    title: "星際旅行訂票平台",
    description: "悠遊宇宙的夢想，從這裡開始實現",
    tags: ["網頁設計", "響應式設計", "Bootstrap"],
  },
  {
    Img: `https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image2.png?raw=true`,
    title: "理財App",
    description: "連動帳戶與行動支付，讓 AI 提供您最好的理財建議",
    tags: ["APP設計", "iOS", "React"],
  },
  {
    Img: `https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image3.png?raw=true`,
    title: "醫美診所官網",
    description: "永保青春的秘密，從粹究開始",
    tags: ["網頁設計", "響應式設計", "ＷordPress"],
  },
  {
    Img: `https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image4.png?raw=true`,
    title: "美美美早餐店 POS 機 UI Design",
    description: "訂單送單一目瞭然，自動報表分析好輕鬆",
    tags: ["UI 設計", "前端開發", "Wix"],
  },
];

export default function FourCards() {
  return (
    <section className={styles.container}>
      <main className={styles.card_wrapper}>
        <ul>
          {cardInfos.map((val, i) => (
            <li>
              <article className={styles.card}>
                <div className={styles.img_wrapper}>
                  <img
                    src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/work-image1.png?raw=true"
                    alt="星際旅行訂票平台"
                  />
                </div>
                <div className={styles.card_content}>
                  <h3>星際旅行訂票平台</h3>
                  <p>悠遊宇宙的夢想，從這裡開始實現</p>
                </div>
                <div className={styles.card_tags}>
                  <span>網頁設計</span>
                  <span>響應式設計</span>
                  <span>Bootstrap</span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
}
