
-- --------------------------------------------------------

--
-- Structure for view `registrations_by_group`
--
DROP TABLE IF EXISTS `registrations_by_group`;

DROP VIEW IF EXISTS `registrations_by_group`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `registrations_by_group`  AS SELECT `active_registration_group_participant_data`.`group_id` AS `group_id`, `active_registration_group_participant_data`.`title` AS `title`, `active_registration_group_participant_data`.`contact_id` AS `contact_id`, `active_registration_group_participant_data`.`sort_name` AS `sort_name`, `active_registration_group_participant_data`.`role` AS `role` FROM `active_registration_group_participant_data` ;
