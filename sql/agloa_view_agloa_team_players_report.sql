
-- --------------------------------------------------------

--
-- Structure for view `agloa_team_players_report`
--
DROP TABLE IF EXISTS `agloa_team_players_report`;

DROP VIEW IF EXISTS `agloa_team_players_report`;
CREATE OR REPLACE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `agloa_team_players_report`  AS SELECT 1 AS `team_id`, 1 AS `team_name`, 1 AS `created_by`, 1 AS `player_id`, 1 AS `player_name`, 1 AS `registration_group`, 1 AS `game` ;
