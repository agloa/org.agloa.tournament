
-- --------------------------------------------------------

--
-- Structure for view `active_team_player_count`
--
DROP TABLE IF EXISTS `active_team_player_count`;

DROP VIEW IF EXISTS `active_team_player_count`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `active_team_player_count`  AS SELECT `num_players`.`team_id` AS `team_id`, `num_players`.`title` AS `title`, count(`num_players`.`contact_id`) AS `num_players` FROM `active_team_players` AS `num_players` GROUP BY `num_players`.`team_id` ;
