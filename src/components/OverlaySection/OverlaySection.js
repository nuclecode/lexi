import styles from './OverlaySection.module.scss';

const NextSection = () => {
    return (
        <div className={styles.nextSection}>
            <h2>This is the Next Section</h2>
            <p>
                Content that overlays the video when you scroll down. Add your content here.
            </p>
        </div>
    );
};

export default NextSection;