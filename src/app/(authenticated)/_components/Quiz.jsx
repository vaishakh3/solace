import { MoveRight } from "lucide-react";
import styles from '@/styles/quiz.module.css';

function Quiz() {
  return (
    <>
        <div className={styles.wrapper}>
            <h3>If you were a weather condition right now, what would you be?</h3>
            <div className={styles.options}>
                <button>Sunny and bright</button>
                <button>Cloudy with a chance of rain</button>
                <button>Thunderstorms and lightning</button>
                <button>A calm and cool breeze</button>
            </div>
            <button className={styles.submit_btn}>
                Next
                <MoveRight />
            </button>
        </div>
    </>
  );
}


export default Quiz;
