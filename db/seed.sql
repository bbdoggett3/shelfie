CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name VARCHAR(25),
    price INTEGER,
    img TEXT
);


INSERT INTO products (
    name,
    price,
    img
)VALUES (
    'Oak Wood',
    121,
    'https://target.scene7.com/is/image/Target/GUEST_f49bd93e-fb04-4dae-9f51-5e0bb2dedc3a?wid=488&hei=488&fmt=pjpeg'
);