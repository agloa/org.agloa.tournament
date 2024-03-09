
-- --------------------------------------------------------

--
-- Structure for view `registration_group_type`
--
DROP TABLE IF EXISTS `registration_group_type`;

DROP VIEW IF EXISTS `registration_group_type`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `registration_group_type`  AS SELECT `group_types`.`value` AS `value` FROM `group_types` WHERE (`group_types`.`value_label` like 'Registration Group') ;
