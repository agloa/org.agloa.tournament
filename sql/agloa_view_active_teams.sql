
-- --------------------------------------------------------

--
-- Structure for view `active_teams`
--
DROP TABLE IF EXISTS `active_teams`;

DROP VIEW IF EXISTS `active_teams`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `active_teams`  AS SELECT `cg`.`id` AS `id`, `cg`.`title` AS `title`, `cg`.`created_id` AS `created_id`, (select `created`.`sort_name` from `civicrm_contact` `created` where (`created`.`id` = `cg`.`created_id`)) AS `created_by`, `cg`.`modified_id` AS `modified_id`, (select `created`.`sort_name` from `civicrm_contact` `created` where (`created`.`id` = `cg`.`modified_id`)) AS `modified_by` FROM (`civicrm_group` `cg` join `team_group_type` `tgt` on((`cg`.`group_type` = `tgt`.`value`))) WHERE (`cg`.`is_active` > 0) ;
