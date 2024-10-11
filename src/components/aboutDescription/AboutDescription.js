import styles from './AboutDescription.module.scss';

export const metadata = {
    title: 'LEXI Construction Services - About Our Team',
    description: 'Learn about our company&apos;s mission, values, and team. Discover why we&apos;re the leading provider of Home, office, apartment renovation services',
  };
  

export default function AboutDescription() {
    return (
        <article className={styles.article}>
            <header className={styles.header}>About our Team</header>
            <main> 
              <p>  
                At LEXI, we specialize in transforming properties into homes you&apos;ll love. With years of experience in both internal and external renovation, our skilled team is dedicated to delivering high-quality craftsmanship on every project. Whether you&apos;re making large structural changes, refreshing your interiors, or enhancing your outdoor spaces, we provide reliable and tailored services that meet your unique needs.
              </p>
              <div>
                    <h3>Internal Works</h3>
                    <p>
                        From complete refurbishments to smaller projects, we handle everything with attention to detail:
                    </p>    
                    <ul>            
                        <li>Large and small structural changes</li>
                        <li>Flooring & skirting installation</li>
                        <li>Wallpapering, plastering, and coving</li>
                        <li>Painting & decorating</li> 
                        <li>Tiling and kitchen renovations</li>
                        <li>Stripping & repainting for a fresh new look</li>
                    </ul>    
              </div>
              <div>
                    <h3>External Works</h3>  
                     <p>  
                        Our expertise extends to the outside of your property, ensuring it&apos;s as impressive as the interior:
                     </p>
                     <ul>
                        <li>K-rendering for weatherproof finishes</li>
                        <li>Paving and landscaping solutions</li>
                        <li>Fencing and gates for added security and style</li>
                     </ul>
              </div> 
              <p>
                    We take pride in completing every project on time and within budget, ensuring our clients are satisfied with the results. Whether you&apos;re a landlord preparing a rental property, or an investor restoring an auction purchase, LEXI team is here to bring your vision to life.
              </p>      
        </main>
        </article>
    );
};