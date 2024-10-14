// //  v2

// src/components/Snake.js

import styles from './Snake.module.scss';

const Snake = () => {
  const services = [
    "Internal works",
    "Large and small structural changes",
    "Refurbishments",
    "Flooring & Skirting",
    "Wallpapering",
    "Plastering",
    "Painting & Decorating",
    "Coving",
    "Tiling",
    "Kitchens",
    "Stripping & Repainting",
    "External works",
    "K-rendering",
    "Paving",
    "Fencing & Gates",
  ];

  return (
    <div className={styles.snakeContainer}>
      <div className={styles.snakeLine}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceItem}>
            {service}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Snake;




// // v1

// import styles from './Snake.module.scss';

// const Snake = () => {
//   const services = [
//     "Internal works",
//     "Large and small structural changes",
//     "Refurbishments",
//     "Flooring & Skirting",
//     "Wallpapering",
//     "Plastering",
//     "Painting & Decorating",
//     "Coving",
//     "Tilling",
//     "Kitchens",
//     "Stripping & Repainting",
//     "External works",
//     "K-rendering",
//     "Paving",
//     "Fencing & Gates",
//   ];

//   return (
//     <div className={styles.snakeContainer}>
//       <div className={styles.snakeLine}>
//         {services.map((service, index) => (
//           <div key={index} className={styles.serviceItem}>
//             {service}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Snake;
