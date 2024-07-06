import React from 'react';
import styles from './MakeupPage.module.css';

export default function MakeupPage() {
  const videos = [
    { id: 'aWpGQglI8aU', title: 'Everyday Makeup Tutorial' },
    { id: 'nBvkeKvKH3I', title: 'Smokey Eye Makeup Tutorial' },
    { id: '4Q-mvBGy4d8', title: '10 Minute Makeup for Busy Mornings' },
    { id: 'bODVo6QHyCk', title: 'Makeup for Beginners' },
    { id: 'jH1Jps6yXHE', title: 'Glamorous Night Out Makeup' },
    // Add more video IDs and titles here
  ];

  return (
    <div className={styles.makeupPage}>
      <h2>Makeup Videos</h2>
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
