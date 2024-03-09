
-- --------------------------------------------------------

--
-- Structure for view `incomplete_teams_orphaned_players`
--
DROP TABLE IF EXISTS `incomplete_teams_orphaned_players`;

DROP VIEW IF EXISTS `incomplete_teams_orphaned_players`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `incomplete_teams_orphaned_players`  AS SELECT `itc`.`team_id` AS `team_id`, `itc`.`title` AS `team_name`, `itc`.`num_players` AS `num_players`, `itc`.`competition` AS `competition`, `rpnot`.`contact_id` AS `contact_id`, `rpnot`.`registration_group` AS `registration_group` FROM (`incomplete_teams_competition` `itc` join `registered_players_not_on_team` `rpnot` on((`itc`.`competition` = `rpnot`.`competition`))) ;
