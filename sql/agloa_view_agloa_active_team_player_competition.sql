
-- --------------------------------------------------------

--
-- Structure for view `agloa_active_team_player_competition`
--
DROP TABLE IF EXISTS `agloa_active_team_player_competition`;

DROP VIEW IF EXISTS `agloa_active_team_player_competition`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `agloa_active_team_player_competition`  AS SELECT `atcp`.`team_id` AS `team_id`, `atp`.`contact_id` AS `contact_id`, `atcp`.`competition_type` AS `competition_type` FROM (`active_team_players` `atp` join `agloa_team_competition_type` `atcp` on((`atp`.`team_id` = `atcp`.`team_id`))) ;
