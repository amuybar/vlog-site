import React from 'react';
import styles from './HairstylePage.module.css';
import Image from 'next/image';

export default function HairstylePage() {
  const videos = [
    { id: 'dQw4w9WgXcQ', title: 'Stylish Braids' },
    { id: 'oHg5SJYRHA0', title: 'Elegant Updo' },
    { id: 'a48c2zZ4K6Y', title: 'Minimalist Haircuts' },
    { id: 'lZ06g5u8F9I', title: 'Sleek and Elegant Haircuts' },
    { id: '3z4Q05V86Ms', title: 'Gentle Haircuts' },
    
  ];

  return (
    <div className={styles.hairstylePage}>
      <h2>Hairstyle Trends</h2>
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
