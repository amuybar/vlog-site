import React from 'react';
import styles from './SkincarePage.module.css';

export default function HairstylePage() {
  const videos = [
    { id: 'yJg-Y5byMMw', title: 'The Ultimate Skincare Routine' },
    { id: 'ODWhjc_UVz4', title: 'Morning Skincare Routine' },
    { id: 'M3OeCOwCqyQ', title: 'Evening Skincare Routine' },
    { id: 'Gkzhe12TxMs', title: 'Best Skincare Products for Oily Skin' },
    { id: 'j8wWNbdcLx4', title: 'DIY Skincare Hacks' },

  ];

  return (
    <div className={styles.hairstylePage}>
      <h2>Skin Care Videos</h2>
      <div className={styles.videoGrid}>
        {videos.map(video => (
          <div key={video.id} className={styles.videoCard}>
            <iframe
              width="100%"
              height="auto"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
            />
            <div className={styles.videoInfo}>
              <h3>{video.title}</h3>
              <div className={styles.buttons}>
                <button className={styles.likeBtn}>👍 Like</button>
                <button className={styles.commentBtn}>💬 Comment</button>
                <button className={styles.dislikeBtn}>👎 Dislike</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
