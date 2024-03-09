
-- --------------------------------------------------------

--
-- Structure for view `latest_active_tournament_participants`
--
DROP TABLE IF EXISTS `latest_active_tournament_participants`;

DROP VIEW IF EXISTS `latest_active_tournament_participants`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `latest_active_tournament_participants`  AS SELECT `cp`.`id` AS `id`, `cp`.`contact_id` AS `contact_id`, `cc`.`sort_name` AS `sort_name`, `cc`.`display_name` AS `display_name`, `cp`.`status_id` AS `status_id`, `cpst`.`label` AS `status`, `cp`.`role_id` AS `role_id`, `pr`.`value_label` AS `role`, `cp`.`fee_level` AS `fee_level`, `cp`.`register_date` AS `register_date` FROM ((((`latest_active_tournament` `t` join `civicrm_participant` `cp` on((`cp`.`event_id` = `t`.`id`))) join `civicrm_contact` `cc` on((`cc`.`id` = `cp`.`contact_id`))) join `civicrm_participant_status_type` `cpst` on((`cpst`.`id` = `cp`.`status_id`))) join `participant_roles` `pr` on((`pr`.`value` = `cp`.`role_id`))) WHERE ((`cp`.`is_test` = 0) AND (`cc`.`is_deleted` = 0) AND (not((`cpst`.`label` like 'Cancelled')))) ;
