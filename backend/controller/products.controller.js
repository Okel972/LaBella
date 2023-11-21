const pool = require("../databases/index");

const productsController = {
  getAllProducts: async (req, res) => {
    try {
      //const [rows] = await pool.query("SELECT * FROM products");
      const products = [
        {
          picture: "img/Olivia1.png",
          title: "Poulet",
          description: "Base tomate, fromage, olives vertes, olives noires…",
          price: "6.00€",
        },

        {
          picture: "img/Olivia1.png",
          title: "Olivia",
          description: "Base tomate, fromage, olives vertes, olives noires…",
          price: "6.00€",
        },
        {
          picture: "img/Olivia1.png",
          title: "Olivia",
          description: "Base tomate, fromage, olives vertes, olives noires…",
          price: "6.00€",
        },
        {
          picture: "img/Olivia1.png",
          title: "Olivia",
          description: "Base tomate, fromage, olives vertes, olives noires…",
          price: "6.00€",
        },
        {
          picture: "img/Olivia1.png",
          title: "Olivia",
          description: "Base tomate, fromage, olives vertes, olives noires…",
          price: "6.00€",
        },
        {
          picture: "img/Olivia1.png",
          title: "Olivia",
          description: "Base tomate, fromage, olives vertes, olives noires…",
          price: "6.00€",
        },
      ];
      res.json(products);
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = productsController;
