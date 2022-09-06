-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: nfts_db
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `avatars`
--

DROP TABLE IF EXISTS `avatars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `avatars` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `avatar_name` varchar(45) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avatars`
--

LOCK TABLES `avatars` WRITE;
/*!40000 ALTER TABLE `avatars` DISABLE KEYS */;
INSERT INTO `avatars` VALUES (1,'https://robohash.org/asperioreseaconsequatur.',NULL),(2,'https://robohash.org/evenietabrerum.png?size=',NULL),(3,'https://robohash.org/placeatmagnamdolor.png?s',NULL),(4,'https://robohash.org/eiusisteaut.png?size=50x',NULL),(5,'https://robohash.org/blanditiisconsequaturcon',NULL),(6,'https://robohash.org/molestiasexercitationeme',NULL),(7,'https://robohash.org/atquelaboreconsequuntur.',NULL),(8,'https://robohash.org/voluptatumenimrepudianda',NULL),(9,'https://robohash.org/omnisaliaspariatur.png?s',NULL),(10,'https://robohash.org/earumvoluptatumeos.png?s',NULL),(11,'https://robohash.org/eautquia.png?size=50x50&',NULL),(12,'https://robohash.org/adquidemtotam.png?size=5',NULL),(13,'https://robohash.org/etquiodio.png?size=50x50',NULL),(14,'https://robohash.org/quisquamametet.png?size=',NULL),(15,'https://robohash.org/sedquisrem.png?size=50x5',NULL),(16,'https://robohash.org/nobisasperioresodit.png?',NULL),(17,'https://robohash.org/quibusdamvoluptatemomnis',NULL),(18,'https://robohash.org/repellatoptioculpa.png?s',NULL),(19,'https://robohash.org/vitaeipsameum.png?size=5',NULL),(20,'https://robohash.org/perspiciatiseosincidunt.',NULL),(21,'https://robohash.org/maximerationeculpa.png?s',NULL),(22,'https://robohash.org/remutrepellendus.png?siz',NULL),(23,'https://robohash.org/nostrumestipsa.png?size=',NULL),(24,'https://robohash.org/quasutet.png?size=50x50&',NULL),(25,'https://robohash.org/eaarchitectoid.png?size=',NULL),(26,'https://robohash.org/similiquequoarchitecto.p',NULL),(27,'https://robohash.org/veniamexpeditareiciendis',NULL),(28,'https://robohash.org/ducimusullamperspiciatis',NULL),(29,'https://robohash.org/providentetatque.png?siz',NULL),(30,'https://robohash.org/fugitdolortenetur.png?si',NULL);
/*!40000 ALTER TABLE `avatars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coleccion`
--

DROP TABLE IF EXISTS `coleccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `coleccion` (
  `id_coleccion` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `banner_image` varchar(45) DEFAULT NULL,
  `description` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id_coleccion`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coleccion`
--

LOCK TABLES `coleccion` WRITE;
/*!40000 ALTER TABLE `coleccion` DISABLE KEYS */;
INSERT INTO `coleccion` VALUES (1,'Bored_Ape','banner.jpg','The Bored Ape Yacht Club is a collection of 1'),(2,'CyberKongz VX','CyberKongz VX_banner.jpg',' CyberKongz VX are unique and randomly generated 3D NFT Social Avatars for the Metaverse'),(3,'Ethilizards','Ethilizards_banner.jpg','A collection of unique and glorious Ethlizards just vibin '),(4,'Edifice by Ben Kovach','Edifice by Ben Kovach_banner.jpg','Edifice by Ben Kovach - Art Blocks Curated'),(5,'Bulls & Apes Project','Bulls & Apes Project_banner.jpg',' Bulls & Apes Project features fantastic 3D art'),(6,'Cool Cats','Cool Cats_banner.jpg','Cool Cats is a collection of 9,999 randomly generated and stylistically curated NFTs'),(7,'Doodles','Doodles-banner.jpg','A community-driven collectibles project featuring art by Burnt Toast'),(8,'Sappy Seals','Sappy Seals_banner.jpg','Sappy Seals is community-led project focused on metaverse expansion and a growing ecosystem'),(9,'CrypToadz by GREMPLIN','CrypToadz by GREMPLIN_banner.jpg','  CrypToadz are a collection 6969 small amphibious creatures'),(10,'KILLABEARS','KILLABEARS_banner.jpg','  KILLABEARS is a collection of 3333 thoughtfully designed animated and randomly generated NFTs'),(11,'Boki','Boki_banner.jpg','Boki is a collection of 7,777 unique characters who live in the World of Boki'),(12,'CryptoNinja Partners','CryptoNinja Partners_banner.jpg','CryptoNinja Partners (CNP) is a 22,222-piece collection starring CryptoNinja sub-characters');
/*!40000 ALTER TABLE `coleccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nfts`
--

DROP TABLE IF EXISTS `nfts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nfts` (
  `idNFTs` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(45) NOT NULL,
  `oddity` int(11) DEFAULT NULL,
  `coleccion_id` int(11) DEFAULT NULL,
  `saleDetail_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`idNFTs`),
  KEY `coleccion_id_idx` (`coleccion_id`),
  KEY `saleDetail_id_idx` (`saleDetail_id`),
  CONSTRAINT `coleccion_id` FOREIGN KEY (`coleccion_id`) REFERENCES `coleccion` (`id_coleccion`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `saleDetail_id` FOREIGN KEY (`saleDetail_id`) REFERENCES `saledetail` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nfts`
--

LOCK TABLES `nfts` WRITE;
/*!40000 ALTER TABLE `nfts` DISABLE KEYS */;
INSERT INTO `nfts` VALUES (1,'4645',10000,'monoblanco.jpeg',4,1,NULL),(2,'8546',12000,'imagen-1657674614919',5,1,NULL),(3,'2541',9000,'monogorro.webp',3,1,NULL),(4,'1478',20000,'monogolden.webp',8,1,NULL),(5,'9542',7000,'monorey.webp',2,1,NULL),(6,'8742',6000,'monosanto.webp',2,1,NULL),(7,'6584',35000,'monomarino.jpg',10,1,NULL),(8,'1489',7500,'monopizza.png',5,1,NULL),(9,'8547',12000,'monoleft.jpg',7,1,NULL),(10,'2569',15000,'monobebe.webp',7,1,NULL),(11,'1549',11000,'monorisa.jpg',5,1,NULL),(12,'7458',25000,'ultimomono.jpg',9,1,NULL);
/*!40000 ALTER TABLE `nfts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saledetail`
--

DROP TABLE IF EXISTS `saledetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `saledetail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nft_id` int(11) NOT NULL,
  `sale_id` int(11) NOT NULL,
  `precio` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `nft_id_idx` (`nft_id`),
  KEY `sale_id_idx` (`sale_id`),
  CONSTRAINT `nft_id` FOREIGN KEY (`nft_id`) REFERENCES `nfts` (`idNFTs`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `sale_id` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saledetail`
--

LOCK TABLES `saledetail` WRITE;
/*!40000 ALTER TABLE `saledetail` DISABLE KEYS */;
/*!40000 ALTER TABLE `saledetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `payment_method` varchar(45) NOT NULL,
  `price` varchar(45) NOT NULL,
  `user_id_sale` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id_idx` (`user_id_sale`),
  CONSTRAINT `user_id_sale` FOREIGN KEY (`user_id_sale`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `avatar_id` int(11) DEFAULT NULL,
  `type_of_user` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `avatar_id_idx` (`avatar_id`),
  CONSTRAINT `avatar_id` FOREIGN KEY (`avatar_id`) REFERENCES `avatars` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Morley','Siberry','msiberry0@unicef.org','Maroon',1,NULL),(2,'Sandro','Siney','ssiney1@icio.us','Blue',2,NULL),(3,'Nadia','Storms','nstorms2@slashdot.org','Violet',3,NULL),(4,'Consolata','Evesque','cevesque3@cbslocal.com','Red',4,NULL),(5,'Eachelle','Lints','elints4@buzzfeed.com','Maroon',5,NULL),(6,'Goober','Britner','gbritner5@fastcompany.com','Pink',6,NULL),(7,'Inglis','Cossentine','icossentine6@t.co','Fuscia',7,NULL),(8,'Galen','Risen','grisen7@samsung.com','Indigo',8,NULL),(9,'Joseito','Pinnington','jpinnington8@earthlink.net','Mauv',9,NULL),(10,'Maisie','Varnham','mvarnham9@ezinearticles.com','Teal',10,NULL),(11,'Lew','Gue','lguea@nba.com','Indigo',11,NULL),(12,'Melina','Flaunders','mflaundersb@phpbb.com','Blue',12,NULL),(13,'Britney','Sparrow','bsparrowc@paginegialle.it','Pink',13,NULL),(14,'Ashil','Cantor','acantord@google.nl','Teal',14,NULL),(15,'Tan','Whilde','twhildee@addthis.com','Fuscia',15,NULL),(16,'Jilly','Bridgen','jbridgenf@vkontakte.ru','Maroon',16,NULL),(17,'Bearnard','Shakelade','bshakeladeg@plala.or.jp','Aquamarine',17,NULL),(18,'Giacopo','Brahm','gbrahmh@dedecms.com','Indigo',18,NULL),(19,'Anthe','Stollenbeck','astollenbecki@psu.edu','Green',19,NULL),(20,'Ceciley','Sivill','csivillj@google.pl','Aquamarine',20,NULL),(21,'Edithe','Ayliffe','eayliffek@youku.com','Purple',21,NULL),(22,'Sinclare','Helversen','shelversenl@geocities.jp','Yellow',22,NULL),(23,'Miles','Donkersley','mdonkersleym@hugedomains.com','Yellow',23,NULL),(24,'Pate','MacCole','pmaccolen@columbia.edu','Aquamarine',24,NULL),(25,'Keri','Tesh','ktesho@desdev.cn','Crimson',25,NULL),(26,'Kessia','Sciacovelli','ksciacovellip@usda.gov','Mauv',26,NULL),(27,'Etienne','De Francisci','edefrancisciq@google.nl','Turquoise',27,NULL),(28,'Starr','De Morena','sdemorenar@wunderground.com','Green',28,NULL),(29,'Ardelia','Jude','ajudes@globo.com','Pink',29,NULL),(30,'Yasmin','Pheasant','ypheasantt@nbcnews.com','Yellow',30,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-05 20:07:05
