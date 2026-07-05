const express = require("express");
const cors = require("cors");
const { count } = require("console");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 4000;

const VALID_CATEGORIES = ["skin-care", "beauty", "fragrances"];

async function GetProducts(category) {
  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, 5000);

  try {
    const res = await fetch(
      `https://dummyjson.com/products/category/${category}`,
      {
        signal: controller.signal,
      },
    );

    if (!res.ok) {
      throw new Error(`DummyJSON returned ${res.status} for ${category}`);
    }

    const data = await res.json();

    if (!data.products || !Array.isArray(data.products)) {
      throw new Error(`Invalid response format for ${category}`);
    }

    return data.products;
  } catch (err) {
    if (err.name === "AbortError") {
      console.error(`Request timeout for ${category}`);
    } else {
      console.error(`Failed to fetch ${category}:`, err.message);
    }

    throw err;
  } finally {
    clearTimeout(timeout);
  }
}

async function HandleProductRequest(category) {
  if (category) {
    if (!VALID_CATEGORIES.includes(category)) {
      throw new Error("Invalid category");
    }

    return await GetProducts(category);
  }

  const results = await Promise.allSettled(
    VALID_CATEGORIES.map((category) => GetProducts(category)),
  );

  const products = [];
  const failures = [];

  for (let i = 0; i < results.length; i++) {
    const result = results[i];

    if (result.status === "fulfilled") {
      products.push(...result.value);
    } else {
      failures.push(VALID_CATEGORIES[i]);
    }
  }

  if (products.length === 0) {
    throw new Error("Unable to fetch products from any category");
  }

  if (failures.length > 0) {
    console.warn("Failed categories:", failures.join(", "));
  }

  return products;
}

app.get("/api/products", async (req, res) => {
  try {
    const category =
      req.query.category === "undefined" ||
      req.query.category === "" ||
      req.query.category === "null"
        ? undefined
        : req.query.category;
    const products = await HandleProductRequest(category);

    res.status(200).json(products);
  } catch (err) {
    console.error(err);

    if (err.message === "Invalid category") {
      return res.status(400).json({
        error: err.message,
      });
    }

    res.status(500).json({
      error: "Failed to retrieve products",
    });
  }
});

// Login

var users = [
  {
    id: 1,
    username: "admin",
    password: "1234",
    cart: [],
  },
  {
    id: 2,
    username: "ali",
    password: "1234",
    cart: [],
  },
];

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);

  if (!user) {
    return res.status(401).json({
      message: "Username Not Found",
    });
  }

  if (user.password !== password) {
    return res.status(401).json({
      message: "Wrong Password",
    });
  }

  res.json({
    id: user.id,
    username: user.username,
  });
});

app.post("/api/update-cart", async (req, res) => {
  const { userId, productId, quantity, operation } = req.body;

  const user = users.find((u) => u.id == userId);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  switch (operation) {
    case "add": {
      const products = await HandleProductRequest();

      const product = products.find((p) => p.id == productId);

      if (!product) {
        return res.status(404).json({
          message: "Product not found",
        });
      }

      const existingItem = user.cart.find(
        (item) => item.product.id == productId,
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        user.cart.push({
          product,
          quantity,
        });
      }

      break;
    }

    case "remove": {
      const index = user.cart.findIndex((item) => item.product.id == productId);

      if (index !== -1) {
        user.cart.splice(index, 1);
      }

      break;
    }

    case "increase": {
      const item = user.cart.find((item) => item.product.id == productId);

      if (item) {
        item.quantity++;
      }

      break;
    }

    case "reduce": {
      const item = user.cart.find((item) => item.product.id == productId);

      if (item) {
        item.quantity--;

        if (item.quantity <= 0) {
          const index = user.cart.findIndex((i) => i.product.id == productId);

          user.cart.splice(index, 1);
        }
      }

      break;
    }

    default:
      return res.status(400).json({
        message: "Invalid operation",
      });
  }

  return res.json(user.cart);
});

app.post("/api/cart", (req, res) => {

  const { userId } = req.body;

  const user = users.find(
    u => u.id == userId
  );

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  res.json(user.cart);

});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
