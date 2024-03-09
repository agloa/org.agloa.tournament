
-- --------------------------------------------------------

--
-- Structure for view `option_group_values`
--
DROP TABLE IF EXISTS `option_group_values`;

DROP VIEW IF EXISTS `option_group_values`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `option_group_values`  AS SELECT `cov`.`option_group_id` AS `option_group_id`, `cog`.`title` AS `group_title`, `cov`.`value` AS `value`, `cov`.`label` AS `value_label` FROM (`civicrm_option_value` `cov` join `civicrm_option_group` `cog` on((`cov`.`option_group_id` = `cog`.`id`))) ;
