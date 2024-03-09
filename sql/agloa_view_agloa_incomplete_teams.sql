
-- --------------------------------------------------------

--
-- Structure for view `agloa_incomplete_teams`
--
DROP TABLE IF EXISTS `agloa_incomplete_teams`;

DROP VIEW IF EXISTS `agloa_incomplete_teams`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `agloa_incomplete_teams`  AS SELECT `it`.`team_id` AS `team_id`, `it`.`title` AS `title`, `it`.`num_players` AS `num_players`, `aatc`.`competition_key` AS `competition_key` FROM (`incomplete_teams` `it` join `agloa_active_team_competitions` `aatc` on((`it`.`team_id` = `aatc`.`team_id`))) ORDER BY `it`.`num_players` DESC, `it`.`team_id` ASC ;
