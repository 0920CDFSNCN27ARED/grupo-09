-- Categories --

Insert into product_categories (name)
values 
("Juegos"),
("Comics"),
("Rol"),
("Juguetes"),
("TCG"),
("Manga");


-- Variantes --
insert into product_variants (name)
values 
("variante 1"),
("variante 2"),
("variante 3"),
("variante 4"),
("variante 5");


-- Usuarios --

Insert into customers (email, password, first_name, last_name, phone, type)
values ("prueba@mail.com", "$2b$12$oxxPMdvoJ5DLzzi7vwvFWuk02JE86KXBjUN99srl7/kwuSH/4Uzae", "Prueba", "Prueba", 123456789, "user"); 
        -- Password = prueba123 --

Insert into customers (email, password, first_name, last_name, phone, type)
values ("admin@mail.com", "$2b$12$L8N.QOq4QxRxO0E7JAzI4.xT7ZqyhUl7iLBAKK6WeVc9YII9CEl2K", "Admin", "Admin", 123456789, "admin"); 
        -- Pasword = admin123 --

-- Productos --
insert into products (name, description, size, weight, image, price, qty_sales, qty_stock, sku, variant_id, category_id)
values 
("Black Ranger", "Lorem ipsum", "20x20", "1kg", "black-ranger.jpg", 1500, 1, 1, 12345678, 1, 4),
("Codigo Secreto", "Lorem ipsum", "20x20", "1kg", "codigo-secreto.webp", 2000, 1, 1, 12345678, 2, 1),
("Hero Academia", "Lorem ipsum", "20x20", "1kg", "hero-academia.webp", 800, 1, 1, 12345678, 3, 6),
("Yu-Gi-Oh", "Lorem ipsum", "20x20", "1kg", "yugioh.webp", 900, 1, 1, 12345678, 4, 5),
("Batman", "Lorem ipsum", "20x20", "1kg", "batman.webp", 900, 1, 1, 12345678, 1, 2);
