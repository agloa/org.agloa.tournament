
-- --------------------------------------------------------

--
-- Structure for view `tournament_groups`
--
DROP TABLE IF EXISTS `tournament_groups`;

DROP VIEW IF EXISTS `tournament_groups`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `tournament_groups`  AS SELECT `civicrm_group`.`id` AS `id`, `civicrm_group`.`name` AS `name`, `civicrm_group`.`title` AS `title`, `civicrm_group`.`description` AS `description`, `civicrm_group`.`group_type` AS `group_type`, `civicrm_group`.`is_active` AS `is_active`, `civicrm_group`.`is_hidden` AS `is_hidden`, `civicrm_group`.`created_id` AS `created_id`, `civicrm_group`.`frontend_title` AS `frontend_title`, `civicrm_group`.`frontend_description` AS `frontend_description` FROM `civicrm_group` ;
