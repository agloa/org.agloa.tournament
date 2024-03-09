
-- --------------------------------------------------------

--
-- Structure for view `tournament_registration_groups`
--
DROP TABLE IF EXISTS `tournament_registration_groups`;

DROP VIEW IF EXISTS `tournament_registration_groups`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `tournament_registration_groups`  AS SELECT `tournament_groups`.`id` AS `id`, `tournament_groups`.`name` AS `name`, `tournament_groups`.`title` AS `title`, `tournament_groups`.`description` AS `description`, `tournament_groups`.`group_type` AS `group_type`, `tournament_groups`.`is_active` AS `is_active`, `tournament_groups`.`is_hidden` AS `is_hidden`, `tournament_groups`.`created_id` AS `created_id`, `tournament_groups`.`frontend_title` AS `frontend_title`, `tournament_groups`.`frontend_description` AS `frontend_description` FROM `tournament_groups` WHERE (`tournament_groups`.`group_type` like (select concat('%',`registration_group_type`.`value`,'%') from `registration_group_type`)) ;
