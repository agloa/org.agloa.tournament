
-- --------------------------------------------------------

--
-- Structure for view `active_registration_group_contacts`
--
DROP TABLE IF EXISTS `active_registration_group_contacts`;

DROP VIEW IF EXISTS `active_registration_group_contacts`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `active_registration_group_contacts`  AS SELECT `acg`.`group_id` AS `group_id`, `acg`.`contact_id` AS `contact_id`, `arg`.`id` AS `id`, `arg`.`title` AS `title`, `arg`.`created_id` AS `created_id`, `arg`.`created_by` AS `created_by`, `arg`.`modified_id` AS `modified_id`, `arg`.`modified_by` AS `modified_by`, `arg`.`group_type` AS `group_type` FROM (`active_group_contacts` `acg` join `active_registration_groups` `arg` on((`arg`.`id` = `acg`.`group_id`))) ;
