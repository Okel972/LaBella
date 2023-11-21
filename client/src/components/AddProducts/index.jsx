import './AddProducts.css';

export const AddProducts = () => {
  return (
    <section className="product-form">
      <form action="" method="POST" encType="multipart/form-data">
        <h3>product info</h3>

        <p>
          Product name <span>*</span>
        </p>
        <input
          type="text"
          name="product-name"
          placeholder="Enter product name"
          required
          maxLength="50"
          className="box"
        />

        <p>
          Product price <span>*</span>
        </p>
        <input
          type="number"
          name="price"
          placeholder="Enter product price"
          required
          min="0"
          max="9999999999"
          maxLength="10"
          className="box"
        />

        <p>
          Rubric <span>*</span>
        </p>
        <select name="rubric-name" required className="box" onChange={() => console.log('e')}>
          <option value="pizza">Pizza</option>
          <option value="burger">Burger</option>
          <option value="tacos">Tacos</option>
          <option value="wrap">Wrap</option>
          <option value="fries">Fries</option>
          <option value="salad">Salad</option>
          <option value="drink">Drink</option>
        </select>

        <p>
          Product image <span>*</span>
        </p>
        <input type="file" name="image" required accept="image/*" className="box" />

        <input
          type="submit"
          className="btn"
          name="add"
          value="add product"
          onChange={() => console.log('e')}
        />
      </form>
    </section>
  );
};
