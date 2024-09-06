import styles from "./Products.module.css";

function Products() {
  const products = [
    {
      id: 1,
      title: "Дитячий майданчик",
      img: "placeholder.jpg",
      description: "Опис виробу",
    },
    {
      id: 2,
      title: "Тераса",
      img: "placeholder.jpg",
      description: "Опис виробу",
    },
    {
      id: 3,
      title: "Альтанка",
      img: "placeholder.jpg",
      description: "Опис виробу",
    },
  ];

  return (
    <section id="products" className={styles.products}>
      <h2>Наші вироби</h2>
      <div className={styles.gallery}>
        {products.map((product) => (
          <div key={product.id} className={styles.product}>
            <img src={product.img} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
