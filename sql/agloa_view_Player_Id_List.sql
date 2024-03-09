
-- --------------------------------------------------------

--
-- Structure for view `Player_Id_List`
--
DROP TABLE IF EXISTS `Player_Id_List`;

DROP VIEW IF EXISTS `Player_Id_List`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `Player_Id_List`  AS SELECT 1 AS `id`, 1 AS `first_name`, 1 AS `last_name` ;
