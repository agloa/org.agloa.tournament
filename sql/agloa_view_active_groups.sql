
-- --------------------------------------------------------

--
-- Structure for view `active_groups`
--
DROP TABLE IF EXISTS `active_groups`;

DROP VIEW IF EXISTS `active_groups`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `active_groups`  AS SELECT `cg`.`id` AS `id`, `cg`.`title` AS `title`, `cg`.`created_id` AS `created_id`, (select `created`.`sort_name` from `civicrm_contact` `created` where (`created`.`id` = `cg`.`created_id`)) AS `created_by`, `cg`.`modified_id` AS `modified_id`, (select `created`.`sort_name` from `civicrm_contact` `created` where (`created`.`id` = `cg`.`modified_id`)) AS `modified_by`, `cg`.`group_type` AS `group_type` FROM `civicrm_group` AS `cg` WHERE (`cg`.`is_active` > 0) ;
