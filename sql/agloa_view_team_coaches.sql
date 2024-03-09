
-- --------------------------------------------------------

--
-- Structure for view `team_coaches`
--
DROP TABLE IF EXISTS `team_coaches`;

DROP VIEW IF EXISTS `team_coaches`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `team_coaches`  AS SELECT `civicrm_value_team_data_7`.`entity_id` AS `team_id`, `teams`.`title` AS `team_name`, `get_names_from_ids`(`civicrm_value_team_data_7`.`coaches_85`) AS `coach_names` FROM (`civicrm_value_team_data_7` join `civicrm_group` `teams` on((`teams`.`id` = `civicrm_value_team_data_7`.`entity_id`))) ;
