
-- --------------------------------------------------------

--
-- Structure for view `incomplete_teams`
--
DROP TABLE IF EXISTS `incomplete_teams`;

DROP VIEW IF EXISTS `incomplete_teams`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `incomplete_teams`  AS SELECT `active_team_player_count`.`team_id` AS `team_id`, `active_team_player_count`.`title` AS `title`, `active_team_player_count`.`num_players` AS `num_players` FROM `active_team_player_count` WHERE (`active_team_player_count`.`num_players` <> (select `team_size`.`team_size` from `team_size`)) ;
