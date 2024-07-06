import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* hero */}
      <section>
        <div className={styles.hero}>
          <div className={styles.heroText}>
            <p>Discover the beauty secrets of the world.</p>
          </div>
          {/* social media icons */}
          <div className={styles.socialIcons}>
            <Link className="icon__link" href='/'>
            <Image
            src='/icons/fb.png'
            alt='Facebook'
            width={50}
            height={50}
            />
            </Link>
            <Link className="icon__link" href='/'>
            <Image
            src='/icons/tt.png'
            alt='Tiktok'
            width={50}
            height={50}
            />
            </Link>
            <Link className="icon__link" href='/'>
            <Image
            src='/icons/yt.png'
            alt='Youtube'
            width={50}
            height={50}
            />
            </Link>
            <Link className="icon__link" href='/'>
            <Image
            src='/icons/x.png'
            alt='Twitter/X'
            width={50}
            height={50}
            />
            </Link>
            <Link className="icon__link" href='/'>
            <Image
            src='/icons/wh.png'
            alt='Whatsapp'
            width={50}
            height={50}
            />
            </Link>

            </div>
        </div>

      </section>
      {/* popular products */}
      <section>
        <div className={styles.popularProducts}>
          <div className={styles.productCards}>
            <Link href='/hairstyle'>
              <div className={styles.productCard}>
                <Image
                  src='/images/afro-woman-vector-1164572.avif'
                  alt='Hairstyle'
                  width={200}
                  height={300}
                />
                <h3>HairStyle</h3>
                <p>Trendy and flashy new Hairstyle in town</p>
                
              </div>
            </Link>

            <Link href='/makeup'>
              <div className={styles.productCard}>
              <h3>Make Up</h3>
                <p>Trendy and flashy new Hairstyle in town</p>
                
                <Image
                  src='/images/beautiful-woman-and-makeup-artist-in-a-beauty-vector-32202641.avif'
                  alt='Hairstyle'
                  width={200}
                  height={300}
                />
                
              </div>
            </Link>

            <Link href='/skincare'>
              <div className={styles.productCard}>
                <Image
                  src='/images/beauty-and-spa-colorful-logo-design-template-vector-24836416.avif'
                  alt='Hairstyle'
                  width={200}
                  height={300}
                />
                <h3>HairStyle</h3>
                <p>Trendy and flashy new Hairstyle in town</p>
                
              </div>
            </Link>
         </div>
        </div>
      </section>
      {/* About //video embeded */}
      <section>
  <div className={styles.about} id="about">
    <div className={styles.aboutText}>
      <h2>About Lea Beauty</h2>
      <p>
        Lea Beauty is a beauty and wellness company that specializes in offering high-quality products and services. Our mission is to create a place where people can find their perfect beauty and wellness.
      </p>
    </div>
    {/* video embeded */}
    
    <div className={styles.video}>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/WdhwU_JCINw?si=rYukyYR_Cf9lVUNK" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />  
    </div>
  </div>
</section>

    </main>
  );
}
