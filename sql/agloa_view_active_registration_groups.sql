
-- --------------------------------------------------------

--
-- Structure for view `active_registration_groups`
--
DROP TABLE IF EXISTS `active_registration_groups`;

DROP VIEW IF EXISTS `active_registration_groups`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `active_registration_groups`  AS SELECT `ag`.`id` AS `id`, `ag`.`title` AS `title`, `ag`.`created_id` AS `created_id`, `ag`.`created_by` AS `created_by`, `ag`.`modified_id` AS `modified_id`, `ag`.`modified_by` AS `modified_by`, `ag`.`group_type` AS `group_type` FROM (`active_groups` `ag` join `registration_group_type` on((`ag`.`group_type` like concat('%',`registration_group_type`.`value`,'%')))) ;
