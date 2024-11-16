import Image from "next/image";

import ArtBox from "@/components/ArtBox";
import FrameBox from "@/components/FrameBox";

import styles from "./page.module.css";

type InfoItem = {
  title: string;
  content: string;
  contentLink?: string;
};

export default function Home() {
  const currentYear = new Date().getFullYear();

  const infoList: InfoItem[] = [
    {
      title: "Blog",
      content: "https://midare.utakana.de",
      contentLink: "https://midare.utakana.de",
    },
    {
      title: "X / Twitter",
      content: "https://x.com/kitayoshi_son",
      contentLink: "https://x.com/kitayoshi_son",
    },
    {
      title: "Instagram",
      content: "https://www.instagram.com/kitayoshi.son",
      contentLink: "https://www.instagram.com/kitayoshi.son",
    },
    {
      title: "YouTube",
      content: "https://www.youtube.com/@kitayoshi_son",
      contentLink: "https://www.youtube.com/@kitayoshi_son",
    },
    {
      title: "哔哩哔哩 / Bilibili",
      content: "https://space.bilibili.com/281272",
      contentLink: "https://space.bilibili.com/281272",
    },
    {
      title: "知乎 / Zhihu",
      content: "https://www.zhihu.com/people/kitayoshi",
      contentLink: "https://www.zhihu.com/people/kitayoshi",
    },
    {
      title: "小红书 / RED",
      content: "Kitayoshi",
      contentLink:
        "https://www.xiaohongshu.com/user/profile/5f5a50820000000001001213",
    },
    {
      title: "LinkedIn",
      content: "https://www.linkedin.com/in/kitayoshi-son",
      contentLink: "https://www.linkedin.com/in/kitayoshi-son",
    },
    {
      title: "email (# -> @)",
      content: "midare#utakana.de",
    },
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.slide}>
          <ArtBox title="Kitayoshi" description="Piano Amateur">
            <FrameBox>
              <Image
                className={styles.logo}
                src="/avatar.jpg"
                alt="Kitayoshi's avatar"
                width={200}
                height={200}
                priority
              />
            </FrameBox>
          </ArtBox>
        </div>
        <div className={styles.slide}>
          <div className={styles.infoList}>
            {infoList.map((infoItem, index) => (
              <div key={index} className={styles.infoItem}>
                <div className={styles.infoTitle}>{infoItem.title}</div>
                <div className={styles.infoContent}>
                  {infoItem.contentLink ? (
                    <a
                      className={styles.infoContentLink}
                      href={infoItem.contentLink}
                      target="_blank"
                    >
                      {infoItem.content}
                    </a>
                  ) : (
                    infoItem.content
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        Portions of this content are ©{currentYear} by Kitayoshi SON
      </footer>
    </div>
  );
}
