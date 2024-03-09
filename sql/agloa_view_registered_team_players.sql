
-- --------------------------------------------------------

--
-- Structure for view `registered_team_players`
--
DROP TABLE IF EXISTS `registered_team_players`;

DROP VIEW IF EXISTS `registered_team_players`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `registered_team_players`  AS SELECT `teams`.`id` AS `team_id`, `teams`.`title` AS `team_name`, `team_players`.`contact_id` AS `player_id`, `players`.`sort_name` AS `player_name`, `registration_groups`.`id` AS `registration_groups_id`, `registration_groups`.`title` AS `registration_group_name` FROM ((((`civicrm_group` `teams` join `civicrm_group_contact` `team_players` on(((`team_players`.`group_id` = `teams`.`id`) and (`team_players`.`status` <> 'removed') and (`teams`.`group_type` like concat('%',(select `team_group_type`.`value` from `team_group_type`),'%')) and (`teams`.`is_active` = true)))) left join `civicrm_group_contact` `player_memberships` on(((`player_memberships`.`contact_id` = `team_players`.`contact_id`) and (`player_memberships`.`status` <> 'removed')))) join `civicrm_group` `registration_groups` on(((`player_memberships`.`group_id` = `registration_groups`.`id`) and (`registration_groups`.`group_type` like concat('%',(select `registration_group_type`.`value` from `registration_group_type`),'%')) and (`registration_groups`.`is_active` = true)))) join `civicrm_contact` `players` on((`players`.`id` = `team_players`.`contact_id`))) ;
