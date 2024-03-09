
-- --------------------------------------------------------

--
-- Structure for view `group_types`
--
DROP TABLE IF EXISTS `group_types`;

DROP VIEW IF EXISTS `group_types`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `group_types`  AS SELECT `option_group_values`.`option_group_id` AS `option_group_id`, `option_group_values`.`group_title` AS `group_title`, `option_group_values`.`value` AS `value`, `option_group_values`.`value_label` AS `value_label` FROM `option_group_values` WHERE (`option_group_values`.`group_title` like 'Group Type') ORDER BY `option_group_values`.`value` DESC ;
