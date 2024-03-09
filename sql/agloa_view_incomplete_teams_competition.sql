
-- --------------------------------------------------------

--
-- Structure for view `incomplete_teams_competition`
--
DROP TABLE IF EXISTS `incomplete_teams_competition`;

DROP VIEW IF EXISTS `incomplete_teams_competition`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `incomplete_teams_competition`  AS SELECT `it`.`team_id` AS `team_id`, `it`.`title` AS `title`, `it`.`num_players` AS `num_players`, `atct`.`competition` AS `competition` FROM (`incomplete_teams` `it` join `agloa_team_competition_type` `atct` on((`it`.`team_id` = `atct`.`team_id`))) ;
