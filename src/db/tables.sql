--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_name`, `category_description`) VALUES
('Funkos', 'Figuras coleccionables Funko Pop'),
('Remeras', 'Remeras de anime, series, peliculas y más'),
('LLaveros', 'Llaveros coleccionables');

----------------------------------------------------------

--
-- Dumping data for table `licence`
--

INSERT INTO `licence` (`licence_name`, `licence_description`, `licence_img`) VALUES
('Pokemon', 'Atrapa todos los que puedas y disfruta de una colección llena de amigos.', 'pokemon/vulpix-1.webp'),
('Star Wars', 'Disfruta de una saga que sigue agregando personajes a su colección.', 'star-wars/baby-yoda-1.webp'),
('Harry Potter', 'Revive los recuerdos de una saga llena de magia y encanto.', 'harry-potter/snape-patronus-1.webp'),
('Naruto', 'Disfruta de la historia de un ninja adolescente', 'naruto/nr-cover-png');

----------------------------------------------------------

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_name`, `product_description`, `price`, `stock`, `discount`, `sku`, `dues`, `img_front`, `img_back`, `licence_id`, `category_id`) VALUES
('Baby Yoda Blueball', 'Figura coleccionable de Baby Yoda (Grogu) - The Mandalorian Saga, edición limitada.', '1799.99', 8, 10, 'STW001001', 3, '/img/star-wars/baby-yoda-1.webp', '/img/star-wars/baby-yoda-box.webp', 2, 1),
('Luke Skylwalker & Grogu', 'Figura coleccionable de Luke Skylwalker & Grogu - The Mandalorian Saga.', '2399.99', 8, 10, 'STW001003', 3, '/img/star-wars/luke-1.webp', '/img/star-wars/luke-box.webp', 2, 1),
('Stormtrooper Lightsaber', 'Figura coleccionable de Stormtrooper Lightsaber - Star Wars Saga.', '1799.99', 8, 10, 'STW001004', 3, '/img/star-wars/trooper-1.webp', '/img/star-wars/trooper-box.webp', 2, 1),
('Charmander Smiley', 'Figura coleccionable de Charmander - Pokemon Saga.', '1799.99', 8, 10, 'PKM001001', 3, '/img/pokemon/charmander-1.webp', '/img/pokemon/charmander-box.webp', 1, 1),
('Dragonite Hi!', 'Figura coleccionable de Dragonite - Pokemon Saga.', '1799.99', 8, 10, 'PKM001002', 3, '/img/pokemon/dragonite-1.webp', '/img/pokemon/dragonite-box.webp', 1, 1),
('Pidgeotto Flying', 'Figura coleccionable de Pidgeotto - Pokemon Saga.', '1799.99', 8, 10, 'PKM00103', 3, '/img/pokemon/pidgeotto-1.webp', '/img/pokemon/pidgeotto-box.webp', 1, 1),
('Pikachu Smiley', 'Figura coleccionable de Pikachu - Pokemon Saga.', '1799.99', 8, 10, 'PKM001004', 3, '/img/pokemon/pikachu-1.webp', '/img/pokemon/pikachu-box.webp', 1, 1),
('Vulpix Fancy', 'Figura coleccionable de Vulpix - Pokemon Saga.', '99.99', 8, 10, 'PKM001005', 3, '/img/pokemon/vulpix-1.webp', '/img/pokemon/vulpix-box.webp', 1, 1),
('Harry Potter & Hegwid', 'Figura coleccionable de Harry Potter & Hegwid - Harry Potter Saga.', '1799.99', 11, 10, 'HPT001001', 9, '/img/harry-potter/harry-1.webp', '/img/harry-potter/harry-box.webp', 3, 1),
('Herminione Ball Dress', 'Figura coleccionable de Herminione - Harry Potter Saga.', '1799.99', 8, 10, 'HPT001002', 3, '/img/harry-potter/hermione-1.webp', '/img/harry-potter/hermione-box.webp', 3, 1),
('Luna Lovegood Lion Mask', 'Figura coleccionable de Luna Lovegood - Harry Potter Saga.', '1799.99', 8, 10, 'HPT001003', 3, '/img/harry-potter/luna-1.webp', '/img/harry-potter/luna-box.webp', 3, 1),
('Snape Patronus', 'Figura coleccionable de Snape Patronus - Harry Potter Saga.', '1799.99', 13, 10, 'HPT001004', 3, '/img/harry-potter/snape-patronus-1.webp', '/img/harry-potter/snape-patronus-box.webp', 3, 1);

----------------------------------------------------------
