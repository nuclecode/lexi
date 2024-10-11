import styles from './caseRenovation.module.scss';

const CaseRenovation = () => {
  return (
    <div className={styles.caseRenovation}>

      <div className={styles.beforePhoto}>
        <div className={styles.overlayText}>Before Renovation</div>
      </div>
      <div className={styles.doneText}>What we did to renovate this house...</div>
      <div className={styles.afterPhoto}>
        <div className={styles.overlayText}>After Renovation</div>
      </div>
    </div>
  );
};

export default CaseRenovation;
