
-- --------------------------------------------------------

--
-- Structure for view `active_team_players`
--
DROP TABLE IF EXISTS `active_team_players`;

DROP VIEW IF EXISTS `active_team_players`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `active_team_players`  AS SELECT `active_teams`.`id` AS `team_id`, `active_teams`.`title` AS `title`, `cgc`.`contact_id` AS `contact_id` FROM (`active_teams` join `civicrm_group_contact` `cgc` on((`active_teams`.`id` = `cgc`.`group_id`))) WHERE (`cgc`.`status` = 'Added') ;
