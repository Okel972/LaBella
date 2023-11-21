import './AddProducts.css';

export const AddProducts = () => {
    return(
        <section class="product-form">

            <form action="" method="POST" enctype="multipart/form-data">

                <h3>product info</h3>

                <p>Product name <span>*</span></p>
                <input type="text" name="product-name" placeholder="Enter product name" required maxlength="50" class="box"/>

                <p>Product price <span>*</span></p>
                <input type="number" name="price" placeholder="Enter product price" required min="0" max="9999999999" maxlength="10" class="box"/>

                <p>Rubric <span>*</span></p>
                <select name="rubric-name" required class="box">
                    <option value="pizza">Pizza</option>
                    <option value="burger">Burger</option>
                    <option value="tacos">Tacos</option>
                    <option value="wrap">Wrap</option>
                    <option value="fries">Fries</option>
                    <option value="salad">Salad</option>
                    <option value="drink">Drink</option>
                </select>

                <p>Product image <span>*</span></p>
                <input type="file" name="image" required accept="image/*" class="box"/>
                
                <input type="submit" class="btn" name="add" value="add product"/>
                
            </form>

        </section>
    );
}