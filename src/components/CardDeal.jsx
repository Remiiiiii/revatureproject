import { card } from "../assets";
import styles, { layout } from "../styles";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Accelerate your career with the exact skills companies are looking for.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We built a better way for tech talent to find their next opportunity.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <iframe
        className="w-[700px] h-[400px]"
        src="https://www.youtube.com/embed/0FGfrjuFkvg"
        title="YouTube video"
        allowFullScreen
      ></iframe>

      {/* <img src={card} alt="billing" className="w-[100%] h-[100%]" /> */}
    </div>
  </section>
);

export default CardDeal;
