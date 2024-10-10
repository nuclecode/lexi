import CaseRenovation from '@/components/caseRenovation/caseRenovation';
import styles from './page.module.scss';

export default function Services() {
    return (
        <div>
            <h1>Our Renovation Projects</h1>
            <>
      <CaseRenovation 
        orderText="Client requested a full kitchen renovation."
        beforePhoto="/images/bathroom_before.PNG"
        doneText="We replaced the cabinets, installed new appliances, and repainted the walls."
        afterPhoto="/images/bathroom_after.PNG"
      />
      <CaseRenovation 
        orderText="Living room refurbishment request."
        beforePhoto="/images/bathroom_before_1.PNG"
        doneText="Flooring was upgraded, and custom lighting was installed."
        afterPhoto="/images/IMG_2398.PNG"
      />
    </>
            <div className={styles.servicesSection}>
                <h2>Our Services</h2>
                <ul>
                    <li>Kitchen Renovation</li>
                    <li>Bathroom Renovation</li>
                    <li>Home Extensions</li>
                </ul>
            </div>
        </div>
    );
}